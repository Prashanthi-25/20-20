import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ParticipantsData from './participant.json';

  const data = {
    columns: [
        {
            label: 'Name',
            field: 'name',
            sort: 'asc'
          },
        {  
          label: 'Batch',
          field: 'batch',
          sort: 'asc',
        },
        {  
            label: 'Books Read',
            field: 'books_so_far',
            sort: 'asc',
          }, 
          {  
            label: 'Movies Watched',
            field: 'movies_so_far',
            sort: 'asc',
          }, 
          {  
            label: 'Days since Last post',
            field: 'days_since_last_post',
            sort: 'asc',
            width: 100
          }, 
        ],
        rows: 
            ParticipantsData    
      };
    
      class Participants extends Component {
        render() {
      return (
        <MDBDataTable theadColor = '#1c2a48 mdb-color darken-3'
        tbodyColor = '#b1bace mdb-color lighten-4'
        theadTextWhite
        noBottomColumns
        displayEntries={null}
          striped 
          bordered 
          small
          data={data}
        />
      );
      }
    }
    export default Participants;
        

          
          
