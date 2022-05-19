
import 'bulma'
import Header from './Header';
import Banking from './Banking'
import Balance from './Balance'
import AccountType from './AccountType'

function App() {
  return (
    <div  className='section'>
   <Header />   
   <Balance />
   <Banking /> 
   <AccountType />
    </div>
  );
}

export default App;
