import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MoviesData from './movie.json';

  const data = {
    columns: [
      {
        label: 'Movie Name',
        field: 'movie_name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Language',
        field: 'language',
        sort: 'asc',
      },
      {
        label: 'Country',
        field: 'country',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Genre',
        field: 'genre',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Duration',
        field: 'duration',
        sort: 'asc',
        width: 100
      }
    ],
    rows: 
      MoviesData.movie
  };

  class Movies extends Component {
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
export default Movies;