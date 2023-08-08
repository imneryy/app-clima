import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { CaretDown, MapPin, BellRinging } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Sun from "../../assets/solDia.svg";
import SunNubled from "../../assets/solNublado.svg";
import Moon from "../../assets/luaNoite.svg";
import RainingSun from "../../assets/10d.svg";
import LightningSun from "../../assets/11d.svg";
import ColdSun from "../../assets/13d.svg";
import Nuvens from "../../assets/nuvens.svg";

import { useState, useEffect, ReactNode } from "react";

export function Home() {
  const [infoTextUser, setInfoTextUser] = useState<string | null>(null);
  const [infoClima, setInfoClima] = useState<string | null>(null);
  const [containerGradient, setContainerGradient] = useState<string[]>([
    "#fffc00",
    "#ffffff",
  ]);
  const [imageIcon, setImageIcon] = useState<ReactNode | null>(null);
  const [imageIconCard, setImageIconCard] = useState<ReactNode | null>(null);

  const setData = () => {
    const time = new Date().getHours();

    if (time > 4) {
      setInfoTextUser("Bom dia, Nery");
      setInfoClima("26°C");
      setContainerGradient(["#ffe467", "#ffac6f"]);
      setImageIcon(<Sun width={200} height={200} />);
      setImageIconCard(<Sun width={40} height={40} />);
    }
    if (time > 11) {
      setInfoTextUser("Boa tarde, Nery");
      setInfoClima("31°C");
      setContainerGradient(["#292A4E", "#715C77", "#C75C2E"]);
      setImageIcon(<SunNubled width={200} height={200} />);
      setImageIconCard(<SunNubled width={40} height={40} />);
    }
    if (time > 17) {
      setInfoTextUser("Boa noite, Nery");
      setInfoClima("21°C");
      setContainerGradient(["#283E51", "#0A2342"]);
      setImageIcon(<Moon width={200} height={200} />);
      setImageIconCard(<Moon width={40} height={40} />);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <LinearGradient colors={containerGradient} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#FFF" size={25} />
            <Text style={styles.headerLeftText}>João Pessoa</Text>
            <CaretDown color="#FFF" size={25} />
          </View>
          <BellRinging color="#FFF" size={25} />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTextUser}>{infoTextUser}</Text>
          {imageIcon}
          <Text style={styles.infoTextClima}>{infoClima}</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 31° Min.:25°</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerCardFirst}>
            <Text style={styles.footerCardTitle}>Hoje</Text>
            {imageIconCard}
            <Text style={styles.footerCardPreview}>{infoClima}</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Qua</Text>
            <SunNubled width={40} height={40} />
            <Text style={styles.footerCardPreview}>17°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Qui</Text>
            <RainingSun width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sex</Text>
            <LightningSun width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sab</Text>
            <ColdSun width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Dom</Text>
            <Nuvens width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <SunNubled width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 50,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  header: {
    width: "100%",
    height: 45,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255, 0.23)",
    borderRadius: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerLeftText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    alignItems: "center",
  },
  info: {
    paddingVertical: 70,
    alignItems: "center",
    gap: 10,
  },
  infoTextUser: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "300",
  },
  infoTextClima: {
    color: "#FFF",
    fontSize: 100,
    fontWeight: "300",
  },
  infoTextMaxMin: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    // paddingLeft: 35,
    gap: 10,
  },
  footerText: {
    color: "#FFF",
    fontSize: 20,
    paddingLeft: 35,
    fontWeight: "300",
  },
  footerCardFirst: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255,255,255, 0.23)",
    borderRadius: 8,
    marginRight: 14,
    marginLeft: 35,
  },
  footerCard: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255,255,255, 0.30)",
    borderRadius: 8,
    marginRight: 14,
  },
  footerCardTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footerCardPreview: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "300",
  },
});
