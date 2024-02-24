import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
          fontSize: "18px",
        }}
      ></h1>
      <FooterContainer>
        <Row>
          <Column>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              "Bu web sitesi, Bursa Üretken Akademi Code16 Yazılım Akademisi'nin
              React JS eğitimlerinden elde edilen bilgi ve deneyimlerden yola
              çıkarak hazırlanmıştır. <br />
              <hr />
              
              &copy; 2024 FinalProjesite. Tüm hakları saklıdır."
              <hr />Yasemin UĞURLU

            </p>
          </Column>
          <Column>
            <Heading>Bağlantılar</Heading>
            <FooterLink href="#">Ana Sayfa</FooterLink>
            <FooterLink href="/AkilliSehirBursa">Akıllı Şehir</FooterLink>
            <FooterLink href="/GeziRotalari">Gezi Rotaları</FooterLink>
            <FooterLink href="Parklar">Park ve Bahçeler</FooterLink>
            <FooterLink href="EczaneHastane">Eczaneler</FooterLink>
          </Column>

          <Column>
            <Heading>Sosyal Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
              </FooterLink>
                   
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
