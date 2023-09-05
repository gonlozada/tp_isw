import React from 'react';
import Footer from './Footer';
import Header from './Header';

 
const MainLayout = ({children}) => {


  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main className='container-main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;