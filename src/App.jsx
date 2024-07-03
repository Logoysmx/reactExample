import { Fetch } from './components/fetchComponent/Fetch'
import { TableRender } from './components/table/Table';
import { DataProvider } from './components/dataContext/DataContext';

function App() {  

  return (
    <>
      <DataProvider>
        <Fetch pageName="Fetch Data" />
        <TableRender />
      </DataProvider>
    </>
  )
}

export default App