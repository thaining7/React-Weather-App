import React from 'react';

function Form ({ q, handleInputChange, handleFormSubmit }) {
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
          value={q}
          placeholder='Enter a Zip Code'
          name='q'
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
