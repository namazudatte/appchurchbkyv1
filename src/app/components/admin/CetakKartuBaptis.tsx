"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet, pdf } from "@react-pdf/renderer";
import { AiFillPrinter } from "react-icons/ai";
import { saveAs } from "file-saver"; // Install file-saver package
import { useState } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Fungsi untuk membuat dokumen PDF

const MyDocument = ({
  fullname,
  nameBaptis,
  alamat,
  jenisBaptis,
  nameAyah,
  nameIbu,
  jenisKelamin,
  tanggalPengajuan,
}: {
  fullname: string;
  nameBaptis: string;
  alamat: string;
  jenisBaptis: string;
  nameAyah: string;
  nameIbu: string;
  jenisKelamin: string;
  tanggalPengajuan: string;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text> Nama Lengkap : {fullname}</Text>
        <Text> Nama Baptis : {nameBaptis}</Text>
        <Text> Jenis Baptis : {jenisBaptis}</Text>
        <Text> Jenis Kelamin : {jenisKelamin}</Text>
        <Text> Tanggal Pengajuan : {tanggalPengajuan}</Text>
        <Text> Alamat : {alamat}</Text>
        <Text> Nama Ayah : {nameAyah}</Text>
        <Text> Nama Ibu : {nameIbu}</Text>
      </View>
      <View style={styles.section}></View>
    </Page>
  </Document>
);

const CetakKartuBaptis = ({
  fullname,
  nameBaptis,
  alamat,
  jenisBaptis,
  nameAyah,
  nameIbu,
  jenisKelamin,
  tanggalPengajuan,
}: {
  fullname: string;
  nameBaptis: string;
  alamat: string;
  jenisBaptis: string;
  nameAyah: string;
  nameIbu: string;
  jenisKelamin: string;
  tanggalPengajuan: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handlePDF = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<MyDocument fullname={fullname} nameBaptis={nameBaptis} alamat={alamat} jenisBaptis={jenisBaptis} tanggalPengajuan={tanggalPengajuan} jenisKelamin={jenisKelamin} nameAyah={nameAyah} nameIbu={nameIbu} />).toBlob();

      saveAs(blob, `kartu-baptis-${fullname}.pdf`);
    } catch (error) {
      console.error("Error converting image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePDF} className="btn btn-primary rounded-lg mb-5 text-white flex items-center gap-2" disabled={loading}>
      <AiFillPrinter />
      {loading ? "Loading..." : "Cetak Kartu Baptis"}
    </button>
  );
};

export default CetakKartuBaptis;
