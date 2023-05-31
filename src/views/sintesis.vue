<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 A continuación se presenta un mapa conceptual que sintetiza el componente formativo: 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El mapa conceptual sintetiza el componente formativo de la interpretación y traducción en Lengua de Señas Colombiana (LSC), abarcando los aspectos involucrados, las técnicas y métodos empleados, así como las equivalencias entre lenguas. También se presentan distintas técnicas de traducción, como la traducción literal, la adaptación y la consideración de factores culturales. Además, se contrastan las características de la traducción literaria con la traducción comercial y especializada.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
