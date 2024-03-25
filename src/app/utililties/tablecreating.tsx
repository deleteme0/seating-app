"use client"; 
/* eslint-disable react/jsx-key */
import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet} from "@react-pdf/renderer";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

const View = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.View),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );

//   const StyleSheet = dynamic(
//     () => import("@react-pdf/renderer").then((mod) => mod.StyleSheet),
//     {
//       ssr: false,
//       loading: () => <p>Loading...</p>,
//     },
//   );

  const Text = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.Text),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );

export default function Table({ data }) {
    
    const [tableData, setTableData] = useState({
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
    });
    const styles = StyleSheet.create({
        rowView: {
            display: 'flex', flexDirection: 'row', borderTop: '1px solid #EEE', paddingTop: 8, paddingBottom: 8, textAlign: "center"
        }
    });

    useEffect(() => {
        if (data !== undefined) setTableData(data);
    }, []);

    return (
        <>
            {tableData &&
                (
                    <Fragment>
                        <View style={styles.rowView}>
                            {tableData['column'].map((c) => <Text style={{
                                width: `${100 / tableData["column"].length}%`
                            }}>{c}</Text>)}
                        </View>
                        {tableData["data"].map((rowData) => <>
                            <View style={styles.rowView}>
                                {tableData["column"].map((c) =>
                                    <Text style={{ width: `${100 / tableData["column"].length}%` }}>{rowData[c]}</Text>
                                )}
                            </View>
                        </>)}
                    </Fragment>
                )}
        </>

    )
}

// {
//     "column": [
//         "price",
//         "email",
//         "time"
//     ],
//     "data": [
//         {
//             "price": "",
//             "email": "",
//             "time": ""
//         },
//         {
//             "price": "",
//             "email": "",
//             "time": ""
//         }
//     ]
// }