import React from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import styles from './styles.module.sass';
function IndexPage() {
  return (
    <main>
      <div className={styles.container}>
         <Header />
         <ContentContainer/>
      </div>
    </main>
  );
}

export default IndexPage;
