import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { CaretDown, MapPin, BellRinging } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Sun from "../../assets/01d.svg";
import Sun02d from "../../assets/02d.svg";

export function Home() {
  return (
    <LinearGradient
      colors={["#292A4E", "#715C77", "#C75C2E"]}
      style={styles.container}
    >
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
          <Text style={styles.infoTextUser}>Bom dia, Nery</Text>
          <Sun width={200} height={200} />
          <Text style={styles.infoTextClima}>21°C</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 31° Min.:25°</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
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
    paddingHorizontal: 35,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
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
    paddingLeft: 35,
    gap: 10,
  },
  footerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "300",
  },
  footerCard: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255,255,255, 0.23)",
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
