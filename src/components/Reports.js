import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Group, Filter } from '@syncfusion/ej2-react-grids'
import React, { useEffect, useState } from 'react';
function Reports() {

  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch('https://data.austintexas.gov/resource/fdj4-gpfu.json')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(err => console.error(err));
  }, [])
  
  console.log(reports)

  return (
    <div className="reports">
      <GridComponent
      style={{ backgroundColor: '#00fbff', borderRadius: '5px'}} 
      pageSettings={{ pageSize: 8}}
      allowPaging={true}
      allowGrouping={true} 
      allowFiltering={true}
      dataSource={reports}>
        <ColumnsDirective>
          <ColumnDirective field="incident_report_number" headerText='Report Number' textAlign='Left' width='100' />
          <ColumnDirective field="crime_type" headerText='Description' textAlign='Left' width='100' />
          <ColumnDirective field="occ_date" headerText='Date' textAlign='Left' width='100' />
          <ColumnDirective field="occ_time" time headerText='Time' textAlign='Left' width='100' />
          <ColumnDirective field="address" headerText='Address' textAlign='Left' width='100' />
          <ColumnDirective field="zip_code" headerText='Zip Code' textAlign='Left' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
    </div>
  );
}

export default Reports;
