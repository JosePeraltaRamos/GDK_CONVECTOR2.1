<template>
   <div>
     <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.Linea')" />
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
                            <b-input-group-prepend is-text> <i class="simple-icon-magnifier"/>&nbsp;{{$t('Linea.Shearch')}}</b-input-group-prepend>
                            <b-form-input v-model="textFilter" @keyup="OnFilter()" />
                        </b-input-group>                       
                      </b-col>
                      <b-col md="2">
                        <b-btn variant="outline-success default"  @click="OnCreateLinea()">
                             <i class="iconsminds-add-file"/> {{$t('Linea.button.btnNew')}}
                        </b-btn>  
                      </b-col>
                  </b-row>
                  
             </b-card>
        </b-colxx>
     </b-row>
     <b-row>
         <b-colxx xxs="12">
             <b-card class="mb-4" v-if="bDataTable">

             </b-card>
         </b-colxx>
     </b-row>
     <b-modal id="modalbackdrop" ref="modalbackdrop" :hide-header="true" :hide-footer="true"
                    :hide-backdrop="selectedBackdrop=='false'"
                    :no-close-on-backdrop="selectedBackdrop=='false' || selectedBackdrop=='static'" >


     </b-modal>
   </div>
</template>
<script>
 import axios from 'axios'
 import { apiServicio }from '../../../constants/config'
 import { setTimeout } from 'timers'
 export default {
     data(){
         return{
             bDataTable:false,
             selectedBackdrop: 'true',
             textFilter:''
         }
     },
     methods:{
         OnFilter(){

         },
         OnCreateLinea(){
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
         }         
     }
 }
</script>
