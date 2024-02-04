import React, {useState} from 'react'
// import Navigation from '../components/navigation';
// import Footer from '../components/footer';
import Sign from '../components/resultSign';
import { Link } from 'react-router-dom';
import Table from '../components/table';

function Tool() {
  const [selectedInputType, setSelectedInputType] = useState('peptide');
  const [selectedLength, setSelectedLength] = useState('');
  const [selectedAllele, setSelectedAllele] = useState('');
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState(null);
  // Function to handle changes in the selector
  const handleInputTypeChange = (event) => {
    setSelectedInputType(event.target.value);
  }

  const handleFileUpload = (event) =>{
    setFile(event.target.files[0]);
  }
  const handleLengthChange = (event) => {
    setSelectedLength(event.target.value);
  };
  const handleAlleleChange = (event) =>{
    setSelectedAllele(event.target.value);
  }


  const handleRunClick = () =>{
    const formData = new FormData();
    formData.append('length', selectedLength)
    formData.append('allele', selectedAllele)
    formData.append('file', file)

    fetch('http://localhost:8000/process', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())  
    .then(data => {
      console.log(data);
      setTableData(data);
    })
    .catch(error => {
      console.error(error)
    })

  }
  return (
    <div className="container mx-auto p-4">
      
     
     
      <div className='text-center mt-3'>
        <h1 className="text-3xl font-bold underline text-left mb-4">
          T cell prediction Tool
        </h1>
      </div>
      <div className="mt-10 mb-4">
      <label htmlFor="" className='text-l'>INPUT TYPE: </label>
        <select name="selectedInputType" id="selectedInputType" onChange={handleInputTypeChange} className="border-2 border-blue-200 bg-white h-10 px-1 rounded-lg text-l focus:outline-none">
          <option value="peptide">peptide</option>
          <option value="fasta">fasta</option>
        </select>
        {selectedInputType === 'peptide' ? (
          <p><b>Paste</b> a single or several peptides in <Link to="/peptideExample" target='_blank'> <u>PEPTIDE:</u> </Link> format into the field below:</p>
        ) : (
          <p><b>Paste</b> a single sequence or several sequences in <Link to="/fastaExample" target='_blank'><u>FASTA:</u> </Link> format into the field below:</p>
        )}
        <textarea 
          type="textarea" 
          placeholder="Type here" 
          className="border-2 border-gray-300 bg-white h-20 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <p>... or <b>upload</b> a file in <a>FASTA</a> format directly from your local disk: </p>
        <label htmlFor="file">Upload file: </label>
        <input type="file"
        onChange={handleFileUpload}
        />
          
      </div>
      
      <div className="mb-4">
        <header className='text-xl'>Parameters: </header>
        <label htmlFor="length">Length: </label>
        <select id="length" value={selectedLength} onChange={handleLengthChange}>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="allele">Allele: </label>
      <select id="allele" value={selectedAllele} onChange={handleAlleleChange}>
        <option value="HK2Db">H2-Db</option>
        <option value="HK2Kb">H2-Kb</option>
      </select>
      </div>
      <div className='flex justify-end gap-5'>
        <button 
          onClick={handleRunClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          RUN
        </button>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> clear</button>
        
        
      </div>
    
      {tableData ? <Table data={tableData}/> : <Sign/>}

    
    </div>
  
  )
}

export default Tool
