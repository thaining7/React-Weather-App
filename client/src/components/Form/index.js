import React from 'react';

function Form ({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='Query'>
          <strong>Location</strong>
        </label>
        <input
          className='form-control'
          id='Title'
          type='text'
          value={query}
          placeholder='Enter a zip code or city'
          name='query'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='pull-right'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='btn btn-lg btn-success float-right'
        >
                    Search
        </button>
      </div>
    </form>
  );
}

export default Form;
