<script setup></script>

<template>
  <div class="flex align-items-center justify-content-center md:mb-0 mb-3">
    <div
      class="
        flex
        align-items-center
        justify-content-center
        bg-primary
        align-self-center
      "
      style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
    >
      <i class="pi pi-fw pi-info-circle text-5xl text-blue-100"></i>
    </div>
    <h4 class="font-medium text-3xl text-900 ml-3 pb-2">O projektu</h4>
  </div>
  <div class="flex justify-content-center mt-6 text-justify px-4">
    <div style="max-width: 1100px">
      <div class="text-s00 text-2xl line-height-3">
        <p>
          <b>AutoSalon</b> je projekt rađen u sklopu kolegija Programiranje za
          internet koji se održava na III. godini studija informatike na
          Fakultet prirodoslovno-matematičkih i odgojnih znanosti (FPMOZ) na
          Sveučilištu u Mostaru. Cilj kolegija je osposobljavanje studenata za
          razumijevanje principa rada interneta, pripremu i obradu podataka i
          informacija za objavljivanje na webu, dizajniranje, uređivanje i
          održavanje sadržaja objavljenog na webu te izradu jednostavnih
          skripti za dinamične sadržaje na webu. <br /><br />
          Cilj projekta je napraviti Full-Stack web aplikaciju preko koje će se
          moći kupovati određeni automobili iz ponude koji nudi Salon, a
          tehnologije korištene za ovaj projekt biti će prikazane u nastavku.
          Aplikacija je osmišljena na način da ima 3 vrste korsinika:
          <b> Gost</b>, <b> Kupac</b> i <b>Administrator</b>. <br /><br />

          <b>Gost</b> je korisnik koji privremeno posjećuje stranicu te nema
          račun spremljen u bazi. Može pregledavati stranicu i automobile iz
          ponude bez mogućnosti kupovine istih. Gost se može registrirati kao
          korisnik preko forme koja mu je dostupna na web stranici. Nakon
          ispravno unesenih podataka vrši se registracija korisnika te gost
          postaje <b>Kupac</b>. Kupac ima mogućnosti kupovine automobila iz
          ponude, uređivanje korisničkog profila itd... <br /><br />

          <b>Administrator</b> je korisnik koji ima posebne ovlasti u odnosu na
          druge vrste korisnika. On održava rad sustava, dodaje i briše
          automobile i korisnike, upravlja bazama podataka itd...
        </p>
      </div>
      <Divider layout="horizontal" align="center" class="my-8">
        <span class="p-tag text-xl p-2 ">Korištene tehnologije</span>
      </Divider>

      <div class="grid mt-3">
        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/html.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">HTML</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/js.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4"
                >JavaScript</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/css.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">CSS</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/vue.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">Vue.js</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/primevue.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">PrimeVue</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/laravel.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">Laravel</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/sql.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">MySQL</span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div
            class="
              surface-card
              shadow-6
              border-round
              hover:shadow-8
              transition-duration-500
            "
          >
            <div class="flex flex-column align-items-center pb-3">
              <img
                src="/demo/images/technologies/php.png"
                style="height: 16rem"
              /><span class="text-2xl text-800 font-medium mt-4">PHP</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

