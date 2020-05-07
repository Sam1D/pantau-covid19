import React from "react";
import MetaTags from 'react-meta-tags';

// IMPORT : Material Ui @Core
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

// IMPORT : Material Ui @Icons
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

// IMPORT : Material Ui @Styles
import { useTheme } from "@material-ui/core/styles";

// IMPORT : Material Ui @Color
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';

// IMPORT : Images
import IndonesiaLogo from '../../components/images/indonesia_logo.png';
import BatukDanNyeri from '../../components/images/batuk-dan-nyeri.webp';
import Demam from '../../components/images/demam.webp';
import SesakNapas from '../../components/images/sesak-napas.webp';

function Home() {
  // CONSTRUCTOR
  const theme = useTheme();

  return (
    <div>
      <MetaTags>
        <title>Pantau COVID-19 | Beranda</title>
      </MetaTags>

      <Typography variant="h4" gutterBottom>
        Data Sebaran
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card style={{ backgroundColor: deepPurple['A200'], color: theme.palette.getContrastText(indigo['A200']) }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <LanguageOutlinedIcon fontSize="small" /> Global
              </Typography>
              
              <Divider style={{ backgroundColor: '#FFFFFF' }} /><br />
              
              <div style={{ fontSize: 15 }}>
                Negara : 215<br />
                Terkonfirmasi : 3.557.235<br />
                Meninggal : 245.150<br />
              </div>
            </CardContent>
            <CardActions>
              <div style={{ flexGrow: 1 }} />
              <center>
                <Button size="small" variant="outlined" color="inherit">
                  Selengkapnya
                </Button>
              </center>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card style={{ backgroundColor: indigo['A200'], color: theme.palette.getContrastText(indigo['A200']) }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <img src={IndonesiaLogo} alt="indonesia_logo.png" width="21" height="21" />&nbsp;Indonesia
              </Typography>
              
              <Divider style={{ backgroundColor: '#FFFFFF' }} /><br />

              <div style={{ fontSize: 15 }}>
                Positif : 12.438<br />
                Sembuh : 2.317<br />
                Meninggal : 895
              </div>
            </CardContent>
            <CardActions>
              <div style={{ flexGrow: 1 }} />
              <center>
                <Button size="small" variant="outlined" color="inherit">
                  Selengkapnya
                </Button>
              </center>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br /><Divider /><br />
      
      <center>
        <Typography variant="h4" gutterBottom>
          Tentang COVID-19
        </Typography>
      </center><br />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Apa Itu COVID-19
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coronavirus Disease 2019 atau COVID-19 adalah penyakit baru yang dapat menyebabkan gangguan pernapasan dan radang paru. Penyakit ini disebabkan oleh infeksi Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2). Gejala klinis yang muncul beragam, mulai dari seperti gejala flu biasa (batuk, pilek, nyeri tenggorok, nyeri otot, nyeri kepala) sampai yang berkomplikasi berat (pneumonia atau sepsis).
          </Typography>

          <br />

          <Typography variant="h5" gutterBottom>
            Bagaimana COVID-19 Menular?
          </Typography>
          <Typography variant="body1" gutterBottom>
            COVID-19 adalah penyakit baru dan para peneliti masih mempelajari bagaimana cara penularannya. Dari berbagai penelitian, metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran pernapasan dan kontak dekat dengan penderita. Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung virus penyakit, yang dihasilkan pada saat batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu (biasanya 1 meter).<br /><br />Droplet bisa menempel di pakaian atau benda di sekitar penderita pada saat batuk atau bersin. Namun, partikel droplet cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu yang lama. Namun, masyarakat diwajibkan untuk menggunakan masker kain yang menutupi hidung dan mulut untuk mencegah penyebaran droplet.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card style={{ backgroundColor: blue[900], color: theme.palette.getContrastText(blue[900]) }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                <center>Gejala COVID-19</center>
              </Typography><br /><br />

              <center>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <img src={BatukDanNyeri} alt="batuk-dan-nyeri.webp" /><br />
                    Batuk dan Nyeri Tenggorok
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <img src={Demam} alt="demam.webp" /><br />
                    Demam suhu tinggi / Ada riwayat demam
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <img src={SesakNapas} alt="sesak-napas.webp" /><br />
                    Sesak napas
                  </Grid>
                </Grid>
              </center><br /><br />
              
              <center>
                <Typography variant="body1" gutterBottom>
                  Gejala COVID-19 mulai dari seperti gejala flu biasa sampai kondisi berat seperti pneumonia (radang paru akut yang gejalanya sesak napas). Jika Anda mengalami gejala, memiliki riwayat perjalanan ke wilayah terjangkit, atau berpaparan dengan orang positif/kemungkinan COVID-19, maka Anda diimbau untuk melakukan isolasi diri dan menghubungi Hotline COVID-19 di nomor 119.
                </Typography>
              </center>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
