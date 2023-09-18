/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { noticias } from './Data/Data';
import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar/SearchBar';
import '../../../../../EstilosGlobal/noticias.css';

export default function Noticias() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredNoticias, setFilteredNoticias] = useState(noticias);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const newPageCount = Math.ceil(filteredNoticias.length / itemsPerPage);
    if (currentPage >= newPageCount) {
      setCurrentPage(newPageCount - 1);
    }
  }, [filteredNoticias]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(filteredNoticias.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const currentNoticias = filteredNoticias.slice(offset, offset + itemsPerPage);

  const handleSearch = (searchTerm) => {
    const filtered = noticias.filter((noticia) =>
      noticia.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNoticias(filtered);
    setSearchTerm(searchTerm);
    setCurrentPage(0); 
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setFilteredNoticias(noticias);
    setCurrentPage(0); 
  };

  return (
    <div className='container conteinerMargin'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex justify-content-center align-items-center'>
            <SearchBar onSearch={handleSearch} />
            <button className='btn custom-button' onClick={handleRefresh}>
              Actualizar
            </button>
          </div>
        </div>
      </div>
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
          key={filteredNoticias.length}
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
          forcePage={currentPage} 
        />
      </div>
    </div>
  );
}
