import React, { useState } from 'react';
import Card from './Card';
import { noticias } from './Data/Data';
import ReactPaginate from 'react-paginate';
import './EstilosPagination/noticias.css'

export default function Noticias() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(noticias.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const currentNoticias = noticias.slice(offset, offset + itemsPerPage);

  return (
    <div className='container conteinerMargin'>
      <div className='row'>
        {currentNoticias.map((el, index) => (
          <div className='col-md-4' key={index}>
            <Card
              title={el.title}
              description={el.description}
              image={el.image}
            />
          </div>
        ))}
      </div>

      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
        />
      </div>
    </div>
  );
}