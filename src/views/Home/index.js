import './index.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Carousel, Card, Col, Row } from 'antd';
import first from '../../assets/first.JPG';
import second from '../../assets/second.JPG';
import third from '../../assets/third.JPG';
import fourth from '../../assets/fourth.JPG';
import fifth from '../../assets/fifth.jpg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Carousel autoplay draggable={true}>
          <div>
            <img style={{ height: 'auto', width: '100%' }} src={first} />
          </div>
          <div>
            <img style={{ height: 'auto', width: '100%' }} src={second} />
          </div>
          <div>
            <img style={{ height: 'auto', width: '100%' }} src={third} />
          </div>
          <div>
            <img style={{ height: 'auto', width: '100%' }} src={fourth} />
          </div>
          <div>
            <img src={fifth} style={{ height: 'auto', width: '100%' }} />
          </div>
        </Carousel>
        <Row>
          <Col>
            <Card>
              <h2 style={{ textAlign: 'center' }}> Tandem yamaç paraşütü</h2>
              <Col
                style={{ textAlign: 'left', fontSize: '16px', marginTop: '7px' }}
                span={20}
                offset={2}
              >
                42 m2 büyüklüğünde olan iki kişilik yamaç paraşütü ile gerçekleştirilen uçuşlara
                tandem denir. Tandem uçuşlarında paraşütü bu konuda deneyimli bir pilot kullanır;
                diğer kişi ise yolcu pozisyonundadır. Paraşüt zemine serilmiş ve açık durumda pilot
                ve yolcunun arkasında yer alır. Harness adı verilen uçuş koltukları son derece
                modern ve güvenlidir. Yolcu uçuş sırasında pilot ile rahatlıkla sohbet edebilir veya
                fotoğraf çekebilir. Pilot ve yolcu birbirine özel bir sistemle bağlıdır. Pilot
                paraşütü çekerek uçuşa hazır kanat profilini sağlar ve bir kaç adım koşmak suretiyle
                uçuşa geçilir. Tandem uçacak yolcunun özel bir eğitime ihtiyacı yoktur sadece pilot
                tarafından verilecek kısa bir brifing ile uçuşu yapabilir. Tandem uçuş, uzun ve
                teknik bir eğitim süreci gerektirmediği için herkesin Yamaç Paraşütü ile uçuş
                keyfini tatmasına olanak vermektedir. Sky Academy Turkey yıllardır Ölüdeniz Babadağ
                bölgesinde ticari tandem uçuşları hizmeti vermekte, yerli ve yabancı pek çok
                turistin ilgisi artarak devam etmektedir. Tandem uçuş son yılların en popüler
                alternatif turizm ve spor aktivitesi olmuştur.
              </Col>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <h2 style={{ textAlign: 'center' }}> Tandem Bilgilendirme</h2>
              <Col
                style={{ textAlign: 'left', fontSize: '16px', marginTop: '7px' }}
                span={20}
                offset={2}
              >
                Güncel kayıtlarınızı Tandem adayları arasına dahil ederiz. Çarşamba günleri, hava
                koşulları ile ilgili tahminler alındıktan sonra , Perşembe günü tandem adaylarımızı
                e-mail ile bilgilendiririz. ( Kayıt sırasında telefon ile bilgilendirilmek
                istediğinizi belirtirseniz sizleri telefon vasıtasıyla da bilgilendirebiliriz.)
              </Col>
              <Col
                style={{ textAlign: 'left', fontSize: '16px', marginTop: '7px' }}
                span={20}
                offset={2}
              >
                Dileyen katılımcılarımız mail yolu ile veya ofisimizi arayarak rezervasyon
                yaptırabilirler. Katılmak istenilen gün bize bildirilir ve böylece sizin ön
                rezervasyonunuz gerçekleşmiş olur. Rezervasyonunuzun kesinleşebilmesi için ücretin
                yarısını banka havalesi ile veya kredi kartından mail-order ile yapmanız
                gerekmektedir.
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
