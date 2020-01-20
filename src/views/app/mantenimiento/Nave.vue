<template>
   <div>
     <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.Nave')" />
            <div class="separator mb-5"></div>
        </b-colxx>
     </b-row>
     <b-row>
        <b-colxx xxs="12">
             <b-card class="mb-4">
                  <b-row class="mt-3">
                      <b-col md="5"></b-col>
                      <b-col md="5" class="text-right">
                         <b-input-group class="mb-3">
                            <b-input-group-prepend is-text> <i class="simple-icon-magnifier"/>&nbsp;{{$t('Nave.Shearch')}}</b-input-group-prepend>
                            <b-form-input v-model="textFilter" @keyup="OnFilter()" />
                        </b-input-group>                       
                      </b-col>
                      <b-col md="2">
                        <b-btn variant="outline-success default"  @click="OnCreateNave()">
                             <i class="iconsminds-add-file"/> {{$t('Nave.button.btnNew')}}
                        </b-btn>  
                      </b-col>
                  </b-row>
                  
             </b-card>
        </b-colxx>
     </b-row>
     <b-row>
         <b-colxx xxs="12">
             <b-card class="mb-4" v-if="bDataTable">
                <b-table
                 :fields="fields" 
                 :items="DataTable"
                 class="myThead"
                 striped   
                 bordered
                 responsive
                 outlined 
                 small  
                 hover
                 @row-selected="rowSelected"
                >
                   <template slot="chrEstado" slot-scope="row">
                      <span class="text-red"  v-if="row.item.chrEstado === 'I'">{{$t('general.I')}}</span>
                      <span class="text-green"  v-if="row.item.chrEstado === 'A'">{{$t('general.A')}}</span>
                   </template>
                   <template slot="action" slot-scope="row">
                               <a href="#" @click="OnEdit(row.item.intId)" variant="outline-success default" title="Editar">
                                 <i class="simple-icon-note"/> 
                               </a>
                    </template>                
                 </b-table>
                 <b-pagination
                   size="sm"
                   align="center"
                   :total-rows="totalRows"
                   :per-page="nSizePage"
                   v-model="nCurrentPage"
                   @input="rowSelected(nCurrentPage)"
                    v-if="renderPagination"
                 >
                 <template v-slot:next-text>
                    <i class="simple-icon-arrow-right"/>
                 </template>
                 <template v-slot:prev-text>
                     <i class="simple-icon-arrow-left"/>
                 </template>
                 <template v-slot:first-text>
                    <i class="simple-icon-control-start"/>
                 </template>
                 <template v-slot:last-text>
                    <i class="simple-icon-control-end"/>
                 </template>
                 </b-pagination>    
             </b-card>
         </b-colxx>
     </b-row>
     <b-modal id="modalbackdrop" ref="modalbackdrop" :hide-header="true" :hide-footer="true"
                    :hide-backdrop="selectedBackdrop=='false'"
                    :no-close-on-backdrop="selectedBackdrop=='false' || selectedBackdrop=='static'" >

       <b-row>
            <b-col  md="12">
                <b-card class="mb-4" :title="$t('Nave.Title')">
                   <b-form-group label-cols="2" horizontal :label="$t('Nave.Codigo')">
                      <b-form-input v-model="oNave.nvaCodigo"></b-form-input>
                   </b-form-group>
                    <b-form-group label-cols="2" horizontal :label="$t('Nave.Nombre')">
                      <b-form-input v-model="oNave.varNombre"></b-form-input>
                   </b-form-group>
                   <b-form-group label-cols="2" horizontal :label="$t('Nave.Linea')">
                      <v-select v-model="oNave.intIdNave" :options="selectData" :dir="direction" />
                   </b-form-group>                 

                </b-card>
            </b-col>
       </b-row>
              <b-row class="mt-3 text-right">
                <b-col  md="12">
                    <b-btn variant="outline-success default" @click="OnShearchTable()">
                        <i class="simple-icon-drawer"/> {{$t('Nave.button.btnSave')}}
                    </b-btn>                                     
                    <b-btn variant="outline-danger default" @click="hideModal('modalbackdrop')">
                        <i class="simple-icon-action-undo"/> {{$t('Nave.button.btnCancelar')}}
                    </b-btn>
                </b-col>
               </b-row>           
     </b-modal>
   </div>
</template>
<style>
    .mt-3 {margin-top: 0.1rem !important;}
    .input-group-text { border-radius: 0.5rem;   background-color: #375db6 !important;color: white}
    .table-sm td,.table-sm th{padding:.5rem}
    .myThead thead {
        background-color: #375db6 !important;
        color: white !important;
        text-align: center !important;
        font-size: 0.8rem !important;
    }
    .text-red {color: red;}
    .text-green {  color: green;}
</style>
<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
 import axios from 'axios'
 import { apiServicio }from '../../../constants/config'
 import { setTimeout } from 'timers'
import { stringify } from 'querystring'
import { getDirection } from '../../../utils'

 export default {
     components: {
         'v-select' : vSelect
     },
     data(){
         return{
             DataCombos:[],
             direction: getDirection().direction,
             selectData:[],
             renderPagination: true,
             totalRows:0,
             DataTable:[],
             nSizePage:10,
             nCurrentPage:1,
             bDataTable:false,
             selectedBackdrop: 'true',
             textFilter:'',
             sortDesc: false,
             fields: [{key:'intId' ,label:'ID' , sortable: true  , class: 'text-center'}, 
                      {key:'nvaCodigo' ,label:'CÓDIGO' , sortable: true , class: 'text-center' } ,
                      {key:'varNombre',label:'NOMBRE' , class: 'text-center'},
                      {key:'vLinea' , label:'LINEA' , class: 'text-center'},
                      {key:'chrEstado',label:'ESTADO' , class: 'text-center'} ,{key:'action',label:'' , class: 'text-center'}], /*, {key:'vFiltro' ,label:'Filtro'}*/
             oNave:{
              intId :0,
              nvaCodigo :'',
              chrEstado:'',
              varNombre:'',
              dteFechaCreacion: new Date(),
              dteFechaModificacion :0,
              nProceso :0,
              intUserCreacion :0,
              intUserModificacion :0,
              intIdNave :0
             },
                      
       }
     },
    computed:{
        OnSplit(data,caracter){
          let oData = data;
          return oData.split(caracter);
        }
    },
     methods:{
         OnEdit(data){
              this.oNave.nProceso=1;
              this.selectedBackdrop='static'
              this.somethingModal('modalbackdrop')  
         },
         OnStatus(data){

         },
         OnFilter(){
          this.LoadTableData(this.textFilter,this.nCurrentPage);
         },
         OnCreateNave(){
             this.oNave.nProceso=0;
             this.onCargaCombo("L",false)
             this.selectedBackdrop='static'
             this.somethingModal('modalbackdrop')  
         },
         hideModal (refname) {
            this.$refs[refname].hide()
         },
         somethingModal (refname) {
            this.$refs[refname].hide()
             if (refname === 'modalbackdrop') {
                this.$refs['modalbackdrop'].show()
            }
         },
         formatDate (date) {
          if (!date) return null
          const [year, month, day] = date.split('-')
          return `${month}/${day}/${year}`
         },
         parseDate (date) {
           if (!date) return null
           const [month, day, year] = date.split('/')
           return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        LoadTableData(value,page){
         if (!value) value="0";
         if (!page) page=1;


        let promise=axios.get(apiServicio["get"]+ "INaves/",  { 
            params:{'vBusqueda':value,'nPage':page}
         })        
         return promise
         .then(response=> response.data)
         .then((data) => {
            this.totalRows = data.oPage.totalRows
            this.nCurrentPage = data.oPage.currentPage
            this.nSizePage = data.oPage.sizePage

            this.DataTable=data.data    
            this.bDataTable=true;
            const items = data.data
            this.renderPagination=true;
            this.$nextTick(() => {
            this.renderPagination =  this.totalRows ==this.nSizePage ?false: true;
         });
          return (items)
        })
        .catch(error=>{ 
            console.log(error);
        })        
        }  ,
       rowSelected (items) {
         this.bootstrapTable.selected = items
        },
         onCargaCombo(vCondicion , select){
            this.DataCombos=JSON.parse(localStorage.getItem('combo'));
            var IList = this.DataCombos.filter(d => d.vFiltro === vCondicion)
            /*this.selectData.push({label :' SELECCIONE' ,value :'0' ,options:true })*/
            if (IList.length>0){
                for(var i=0 ;i<IList.length;i++){
                    this.selectData.push({label : IList[i].vDescripcion ,value :IList[i].vCodigo})
            }

         
         }
       
    }             
     },
     mounted(){
       this.LoadTableData("0",1)
     }
 }
</script>
