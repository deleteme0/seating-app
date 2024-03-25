"use client"; 
import React from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Table from '../utililties/tablecreating';
import dynamic from 'next/dynamic';

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


export default function Maybe(){

    var sample=
        {
    "column": [
        "price",
        "email",
        "time"
    ],
    "data": [
        {
            "price": "",
            "email": "",
            "time": ""
        },
        {
            "price": "",
            "email": "",
            "time": ""
        }
    ]
}


    return(
    <div>
    <PDFDownloadLink document={<Table data={sample} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
    )
}


// ReactPDF.render(<Table data={} />, `${__dirname}/example.pdf`);