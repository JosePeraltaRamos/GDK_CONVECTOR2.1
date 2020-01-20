<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.Bookings')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4"> <!--:title="$t('Booking.linea')"-->        
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.linea')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.linea"  @click="OnModal('L')"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.nave')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.nave" @click="OnModal('N')"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.viaje')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.viaje"></b-input></b-col>
               </b-row>
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.eta')}}</label> </b-col>
                  <b-col md="2">
                      <!--<b-input type="text" v-model="oBooking.eta"></b-input>-->
                   <v-date-picker
                     mode="single"
                     v-model="oBooking.eta"
                     :input-props="{ class:'form-control'}">
                    </v-date-picker>                     
                  </b-col>
                  <b-col md="2"> <label>{{$t('Booking.pol')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.pol"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.pod')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.pod"></b-input></b-col>                 
               </b-row>
               <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.tcontenedor')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.tcontenedor"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.material')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.material"></b-input></b-col>       
                  <b-col md="2"> <label>{{$t('Booking.tembalaje')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.tembalaje"></b-input></b-col>                             
              </b-row>
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.clinea')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.ncontratoLinea"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.nsolicitud')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.nsolicitud"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.nbooking')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.nbooking"></b-input></b-col>                  
              </b-row>    
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.npedidoTasa')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.npedidoTasa"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.noperadorL')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.operadorLogistico"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.dretiro')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.depotRetiro"></b-input></b-col>                  
              </b-row>  
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.dfcl')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.depotFcl"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.fconsolidacion')}}</label> </b-col>
                  <b-col md="2">
                      <!--<b-input type="text" v-model="oBooking.fecConsolidacion"></b-input>-->
                   <v-date-picker
                     mode="single"
                     v-model="oBooking.fecConsolidacion"
                     :input-props="{ class:'form-control'}">
                    </v-date-picker>                   
                  </b-col>
                  <b-col md="2"> <label>{{$t('Booking.inspeccion')}}</label> </b-col>
                  <b-col md="2">
                    <!--<b-input type="text" v-model="oBooking.inspeccion"></b-input>-->
                   <v-date-picker
                     mode="single"
                     v-model="oBooking.inspeccion"
                     :input-props="{ class:'form-control' }">
                    </v-date-picker>   
                  </b-col>                  
              </b-row>     
              <b-row class="mt-3">
                  <b-col md="2"> <label>{{$t('Booking.estado')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.estado"></b-input></b-col>
                  <b-col md="2"> <label>{{$t('Booking.nordenglobal')}}</label> </b-col>
                  <b-col md="2"><b-input type="text" v-model="oBooking.nOrdenGlobal"></b-input></b-col>                
              </b-row>  
              <b-row class="mt-3 text-right">
                <b-col  md="12">
                    <b-btn variant="outline-danger default" @click="OnShearchTable()">
                        <i class="simple-icon-magnifier"/> {{$t('Booking.button.btnSheach')}}
                    </b-btn>                    
                    <b-btn variant="outline-info default"  @click="OnClear()">
                        <i class="simple-icon-reload"/> {{$t('Booking.button.btnClean')}}
                    </b-btn>                    
                    <b-btn variant="outline-success default">
                        <i class="iconsminds-add-file"/> {{$t('Booking.button.btnNew')}}
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
          :fields="fieldsGrid" 
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
          </b-table>
          <b-pagination
            size="sm"
            align="center"
            :total-rows="totalRows"
            :per-page="nSizePage"
            v-model="nCurrentPage"
            @input="getPostData(nCurrentPage)"
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
<!--:title="$t('modal.modal-title')"-->
   <b-modal id="modalbackdrop" ref="modalbackdrop" :hide-header="true" :hide-footer="true"
                    :hide-backdrop="selectedBackdrop=='false'"
                    :no-close-on-backdrop="selectedBackdrop=='false' || selectedBackdrop=='static'" >
              <b-row>
                 <b-colxx xxs="12">
                    <b-row class="mt-3">
                      <b-col md="12 text-right">
                          <a @click="hideModal('modalbackdrop')" href="#">X</a>
                        </b-col>
                    </b-row>                                
                    <b-row class="mt-3">
                        <b-input-group class="mb-3">
                            <b-input-group-prepend is-text> {{titleModal}}</b-input-group-prepend>
                            <b-form-input v-model="textFilter" @keyup="OnFilter()" />
                        </b-input-group>                                
                    </b-row>
                    <b-row class="mt-3">
                          <b-table
                                 striped   
                                 bordered  
                                 outlined 
                                 small  
                                 hover
                                 :fields="fields" 
                                 :items="DataFiltros"          
                                 :sort-desc.sync="sortDesc"
                                 class="myThead"
                            >
                             <template slot="action" slot-scope="row">
                               <a href="#" @click="OnSend(row.item.vCodigo,row.item.vDescripcion )" variant="outline-success default">
                                 <i class="simple-icon-arrow-right-circle"/> 
                               </a>
                             </template>
                           </b-table>
                      </b-row>
                             
                   </b-colxx>
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
</style>
<script>
import axios from 'axios'
import { apiServicio }from '../../../constants/config'
import { setTimeout } from 'timers'

export default {

  data(){ 
      return{
        renderPagination: true,
        totalRows:0,
        DataTable:[],
        nSizePage:10,
        nCurrentPage:1,
        bDataTable:false,
        Condicion:'',
        titleModal:'',
        textFilter:'',
        DataCombos:[],
        sortDesc: false,
        fieldsGrid: [{key:'varBooking' ,label:'N° BOOKING' , sortable: true  , class: 'text-center'}, 
                     {key:'varRazonSocial' ,label:'LINEA' , sortable: true , class: 'text-center' } ,
                     {key:'varNave' ,label:'NAVE' , sortable: true , class: 'text-center' },
                     {key:'varViaje' ,label:'VIAJE' , sortable: true , class: 'text-center' },
                     {key:'dteEtaPol' ,label:'ETA' , sortable: true , class: 'text-center' },
                     {key:'varPol' ,label:'POL' , sortable: true , class: 'text-center' },
                     {key:'varPod' ,label:'POD' , sortable: true , class: 'text-center' }
                     
                     
                 ], 
        fields:[
                   {key:'vCodigo' ,label:'CODIGO' , sortable: true  , class: 'text-center'}, 
                   {key:'vDescripcion' ,label:'NOMBRE' , sortable: true , class: 'text-center' } ,
                   {key:'action',label:'' , class: 'text-center'}], /*, {key:'vFiltro' ,label:'Filtro'}*/

        selectedBackdrop: 'true',        
        DataFiltros:[],
        oBooking:{
            vCodLinea:'',
            vCodNave:'',
            linea:'',
            nave:'',
            viaje:'',
            eta:new Date(),
            pol:'',
            pod:'',
            tcontenedor:'',
            material:'',
            tembalaje:'',
            ncontratoLinea:'',
            nsolicitud:'',
            nbooking:'',
            npedidoTasa:'',
            operadorLogistico:'',
            depotRetiro:'',
            depotFcl:'',
            fecConsolidacion:new Date(),
            inspeccion:new Date(),
            estado:'',
            nOrdenGlobal:''
        }
        /*,
 
      }*/
   }
  },
  computed:{
    OnSplit(data,caracter){
     let oData = data;
       return oData.split(caracter);
    }
  },
  methods:{
    getPostData(currentPage){
      let _eta =this.formatDate(this.oBooking.eta.toISOString().substr(0, 10)).split("/")
      let _etaF =_eta[2]+_eta[0]+_eta[1]

      let _fecConsolidacion =this.formatDate(this.oBooking.fecConsolidacion.toISOString().substr(0, 10)).split("/")
      let _fecConsolidacionF=_fecConsolidacion[2]+_fecConsolidacion[0]+_fecConsolidacion[1]
      
      let _inspeccion=this.formatDate(this.oBooking.inspeccion.toISOString().substr(0, 10)).split("/")
      let _inspeccionF=_inspeccion[2]+_inspeccion[0]+_inspeccion[1]
 

    let promise=axios.get(apiServicio["get"]+ "ListProduct/",  { 
         params:{'linea':this.oBooking.vCodLinea,'nave':this.oBooking.vCodNave ,'viaje':this.oBooking.viaje,'eta':_etaF,'pol':this.oBooking.pol,
                'pod':this.oBooking.pod ,'tcontenedor':this.oBooking.tcontenedor,'material':this.oBooking.material,'tembalaje':this.oBooking.tembalaje,
                'ncontratoLinea':this.oBooking.ncontratoLinea,'nsolicitud':this.oBooking.nsolicitud,'nbooking':this.oBooking.nbooking,'npedidoTasa':this.oBooking.npedidoTasa,
                'operadorLogistico':this.oBooking.operadorLogistico,'depotRetiro':this.oBooking.depotRetiro,'depotFcl':this.oBooking.depotFcl,'fecConsolidacion':_fecConsolidacionF,
                'inspeccion':_inspeccionF,'estado':this.oBooking.estado,'nOrdenGlobal':this.oBooking.nOrdenGlobal ,'nPage':currentPage ,'SizeRow':this.nSizePage}
        
       })
       return promise
        .then(response=> response.data)
        .then((data) => {
          debugger;
          this.totalRows = data.oPage.totalRows
          this.nCurrentPage = data.oPage.currentPage
          this.nSizePage = data.oPage.sizePage

          this.DataTable=data.data    
          this.bDataTable=true;
          const items = data.data
          this.renderPagination=true;
           this.$nextTick(() => {
        this.renderPagination = true;
    });
          return (items)
        })
       .catch(error=>{ 
            console.log(error);
       })
    },
    OnShearchTable(){
        this.getPostData(1)
    }, 
    rowSelected (items) {
      this.bootstrapTable.selected = items
    },
    OnSend(codigo,text){
      if (this.Condicion=='L'){
           this.oBooking.vCodLinea=codigo;
           this.oBooking.linea=text;
      }else{
            this.oBooking.vCodNave=codigo;
           this.oBooking.nave=text;       
      }
      this.hideModal('modalbackdrop');
    },
    OnFilter(){
        this.onCargaCombo(this.Condicion);
         if(this.textFilter.length>0){
           this.DataFiltros=this.DataFiltros.filter(d=>
                            d.vCodigo.toLowerCase().includes(this.textFilter.toLowerCase())||
                            d.vDescripcion.toLowerCase().includes(this.textFilter.toLowerCase()))

         }
    },
    OnSendSave(){
          console.log(JSON.stringify(this.oBooking))
    },
    OnClear(){
         this.oBooking={
            vCodLinea:'',
            vCodNave:'',
            linea:'',
            nave:'',
            viaje:'',
            eta:new Date(),
            pol:'',
            pod:'',
            tcontenedor:'',
            material:'',
            tembalaje:'',
            ncontratoLinea:'',
            nsolicitud:'',
            nbooking:'',
            npedidoTasa:'',
            operadorLogistico:'',
            depotRetiro:'',
            depotFcl:'',
            fecConsolidacion:new Date(),
            inspeccion:new Date(),
            estado:'',
            nOrdenGlobal:''
           },
           this.DataTable=[]    ,
           this.bDataTable=false,
           this.totalRows =0              
    },
    OnModal(vCondicion){
         this.Condicion=vCondicion;
         this.titleModal= (vCondicion=='L')? "LINEA" :"NAVE";
         this.onCargaCombo(this.Condicion);         
         this.selectedBackdrop='static'
         this.somethingModal('modalbackdrop')  
    },
    onCargaCombo(vCondicion){
       this.DataCombos=JSON.parse(localStorage.getItem('combo'));
       this.DataFiltros=this.DataCombos.filter(d => d.vFiltro === vCondicion)
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
      }
  }
}//Jose PERALTA
</script>
