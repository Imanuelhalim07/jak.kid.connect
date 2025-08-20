document.addEventListener("DOMContentLoaded", function () {
  // Fungsionalitas Umum
  const hamburger = document.getElementById("hamburger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const accordions = document.querySelectorAll(".unicef-accordion");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
      });
    });
  }

  // Akordion di Halaman Kluster Hak Anak
  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".unicef-accordion-button");
    if (button) {
      button.addEventListener("click", () => {
        const isActive = accordion.classList.contains("active");
        document
          .querySelectorAll(".unicef-accordion.active")
          .forEach((item) => {
            if (item !== accordion) {
              item.classList.remove("active");
              item
                .querySelector(".unicef-accordion-button")
                .setAttribute("aria-expanded", "false");
            }
          });

        if (isActive) {
          accordion.classList.remove("active");
          button.setAttribute("aria-expanded", "false");
        } else {
          accordion.classList.add("active");
          button.setAttribute("aria-expanded", "true");
        }
      });
    }
  });

  // Tambahkan fungsionalitas untuk membuka/menutup semua akordion
  window.toggleAllAccordions = function () {
    const accordions = document.querySelectorAll(".unicef-accordion");
    const allAreOpen = Array.from(accordions).every((accordion) =>
      accordion.classList.contains("active")
    );

    accordions.forEach((accordion) => {
      const button = accordion.querySelector(".unicef-accordion-button");
      if (allAreOpen) {
        accordion.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
      } else {
        accordion.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  };

  // Data RPTRA
  const rptraData = [
    {
      name: "RPTRA Tanjung Elang Berseri",
      address: "Pulau Pramuka RT 002 RW 002",
      kelurahan: "Pulau Panggang",
      kecamatan: "Kepulauan Seribu Utara",
      kota: "Kepulauan Seribu",
      fasilitas: "Taman bermain, ruang serbaguna, perpustakaan, ruang laktasi.",
      jam: "Senin-Sabtu, 08:00 - 17:00 WIB",
      kontak: "0812-1234-5678",
      image: "assets/images/tanjung-elang-berseri.png",
    },
    {
      name: "RPTRA Amiterdam",
      address: "Pulau Untung Jawa RT 002 RW 03",
      kelurahan: "Pulau Untung Jawa",
      kecamatan: "Kepulauan Seribu Selatan",
      kota: "Kepulauan Seribu",
      fasilitas: "Lapangan olahraga, area hijau, gazebo, tempat sampah.",
      jam: "Setiap hari, 07:00 - 18:00 WIB",
      kontak: "0813-9876-5432",
      image: "assets/images/amiterdam.png",
    },
    {
      name: "RPTRA Kenanga",
      address: "Jl. Makian No. 1 RT 002 RW 05",
      kelurahan: "Cideng",
      kecamatan: "Gambir",
      kota: "Jakarta Pusat",
      fasilitas: "Ruang bermain, area parkir, kantin.",
      jam: "Senin-Jumat, 09:00 - 17:00 WIB",
      kontak: "0811-2345-6789",
      image: "assets/images/kenanga.png",
    },
    {
      name: "RPTRA Pintu Air",
      address: "Jl. Krekot II RT 007- RW 02",
      kelurahan: "Pasar Baru",
      kecamatan: "Sawah Besar",
      kota: "Jakarta Pusat",
      fasilitas: "Taman bermain, area serbaguna.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/pintu-air.png",
    },
    {
      name: "RPTRA Bandar Kemayoran",
      address: "JI. Kemayoran Timur 8 RT 012 RW 07",
      kelurahan: "Kemayoran",
      kecamatan: "Kemayoran",
      kota: "Jakarta Pusat",
      fasilitas: "Lapangan olahraga, area hijau.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/bandar-kemayoran.png",
    },
    {
      name: "RPTRA Planet Senen",
      address: "JI Pasar Senen Dalam Vill RT 006 RW 04",
      kelurahan: "Senen",
      kecamatan: "Senen",
      kota: "Jakarta Pusat",
      fasilitas: "Ruang bermain, perpustakaan.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/planet-senen.png",
    },
    {
      name: "RPTRA Kampung Benda",
      address: "Jl. Cempaka Putih Tengah XV RT 002 RW 08",
      kelurahan: "Cempaka Putih Timur",
      kecamatan: "Cempaka Putih",
      kota: "Jakarta Pusat",
      fasilitas: "Taman, balai pertemuan.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/kampung-benda.png",
    },
    {
      name: "RPTRA Penjaringan Indah",
      address: "Jl. Bandengan Utara 80 RT 006 RW 16",
      kelurahan: "Penjaringan",
      kecamatan: "Penjaringan",
      kota: "Jakarta Utara",
      fasilitas: "Taman, lapangan.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/penjaringan-indah.png",
    },
    {
      name: "RPTRA Sunter Jaya Berseri",
      address: "JI. SKY 4, Bentengan 6 RT 013 RW 05",
      kelurahan: "Sunter Jaya",
      kecamatan: "Tanjung Priok",
      kota: "Jakarta Utara",
      fasilitas: "Area bermain anak.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/sunter-jaya-berseri.png",
    },
    {
      name: "RPTRA Sindang Raya",
      address: "Jl. Raya Sindang RT 006 RW 09",
      kelurahan: "Koja",
      kecamatan: "Koja",
      kota: "Jakarta Utara",
      fasilitas: "Taman.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/sindang-raya.png",
    },
    {
      name: "RPTRA Cilincing Berseri",
      address: "JI. Sungai Landak RT 008 RW 08",
      kelurahan: "Cilincing",
      kecamatan: "Cilincing",
      kota: "Jakarta Utara",
      fasilitas: "Pusat kegiatan masyarakat, posyandu, toilet bersih.",
      jam: "Senin-Sabtu, 08:00 - 16:00 WIB",
      kontak: "0813-8765-4321",
      image: "assets/images/cilincing-berseri.png",
    },
    {
      name: "RPTRA Budi Mulia",
      address: "Jl. Budi Mulia Raya RT 008 RW 016",
      kelurahan: "Pademangan Barat",
      kecamatan: "Pademangan",
      kota: "Jakarta Utara",
      fasilitas: "Taman.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/budi-mulia.png",
    },
    {
      name: "RPTRA Utama",
      address: "JI. Utama Raya RT 009 RW 04",
      kelurahan: "Slipi",
      kecamatan: "Palmerah",
      kota: "Jakarta Barat",
      fasilitas: "Taman bermain.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/utama.png",
    },
    {
      name: "RPTRA Rambutan",
      address: "Jl. Tanjung Duren Barat 2",
      kelurahan: "Tanjung Duren Utara",
      kecamatan: "Grogol Petamburan",
      kota: "Jakarta Barat",
      fasilitas: "Area hijau.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/rambutan.png",
    },
    {
      name: "RPTRA Matahari",
      address: "Jl Kebon Jeruk XIII RT 013 RW 05",
      kelurahan: "Kebon Jeruk",
      kecamatan: "Kebon Jeruk",
      kota: "Jakarta Barat",
      fasilitas: "Perpustakaan, taman.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/matahari.png",
    },
    {
      name: "RPTRA Kalijodo",
      address: "Jl Pangeran Tubagus Angke No 19",
      kelurahan: "Jembatan Besi",
      kecamatan: "Tambora",
      kota: "Jakarta Barat",
      fasilitas: "Skatepark, lapangan futsal, jogging track.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/kalijodo.png",
    },
    {
      name: "RPTRA Jeruk Manis",
      address: "Perum Kebon Jeruk Baru Blok 3A",
      kelurahan: "Kebon Jeruk",
      kecamatan: "Kebon Jeruk",
      kota: "Jakarta Barat",
      fasilitas: "Taman, area bermain.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/jeruk-manis.png",
    },
    {
      name: "RPTRA Teratai",
      address: "Jl Tebet Timur Raya RT 010 RW 10",
      kelurahan: "Tebet Timur",
      kecamatan: "Tebet",
      kota: "Jakarta Selatan",
      fasilitas: "Taman bermain, lapangan futsal.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/teratai.png",
    },
    {
      name: "RPTRA Saharjo Mentas",
      address: "Jl. Doktor Saharjo No. 121 RT 001 RW 08",
      kelurahan: "Menteng Atas",
      kecamatan: "Tebet",
      kota: "Jakarta Selatan",
      fasilitas: "Ruang edukasi, area refleksi, taman gantung.",
      jam: "Setiap hari, 09:00 - 18:00 WIB",
      kontak: "0812-9876-5432",
      image: "assets/images/saharjo-mentas.png",
    },
    {
      name: "RPTRA Ramah Lingkungan",
      address: "Jl. Kapten Tendean, Gg Jati RT 014 RW 01",
      kelurahan: "Mampang Prapatan",
      kecamatan: "Mampang Prapatan",
      kota: "Jakarta Selatan",
      fasilitas: "Taman, perpustakaan.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/ramah-lingkungan.png",
    },
    {
      name: "RPTRA Belimbing",
      address: "Jl. Masjid Al-Falah RT 005 RW 02",
      kelurahan: "Jagakarsa",
      kecamatan: "Jagakarsa",
      kota: "Jakarta Selatan",
      fasilitas: "Area bermain.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/belimbing.png",
    },
    {
      name: "RPTRA Dwi Chandra Loka",
      address: "Jl. Peninggaran Timur I, RT 004 RW 09",
      kelurahan: "Grogol Selatan",
      kecamatan: "Kebayoran Lama",
      kota: "Jakarta Selatan",
      fasilitas: "Lapangan olahraga.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/dwi-chandra-loka.png",
    },
    {
      name: "RPTRA Utakara Beriman",
      address: "JI. Balai Rakyat 2. RT 014 RW 06",
      kelurahan: "Utan Kayu Selatan",
      kecamatan: "Matraman",
      kota: "Jakarta Timur",
      fasilitas: "Area bermain, ruang serbaguna.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/utakara-beriman.png",
    },
    {
      name: "RPTRA Kayumas",
      address: "JI. Kayumas Utara 1, RT 006 RW 09",
      kelurahan: "Pulogadung",
      kecamatan: "Pulogadung",
      kota: "Jakarta Timur",
      fasilitas: "Taman.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/kayu-mas.png",
    },
    {
      name: "RPTRA Permata Intan",
      address: "Jl. Berlian RT 007 RW 11 Cawang Atas",
      kelurahan: "Cawang",
      kecamatan: "Kramat Jati",
      kota: "Jakarta Timur",
      fasilitas: "Area bermain anak.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/permata-intan.png",
    },
    {
      name: "RPTRA Mustika",
      address: "Jl. Kerja Bakti No. 23 RT 002 RW 10",
      kelurahan: "Makasar",
      kecamatan: "Makasar",
      kota: "Jakarta Timur",
      fasilitas: "Taman, lapangan.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/mustika.png",
    },
    {
      name: "RPTRA Gedong Trikora",
      address: "Jl. Trikora Raya Gg. Hj. Nipah No. 13 RT 003 RW",
      kelurahan: "Gedong",
      kecamatan: "Pasar Rebo",
      kota: "Jakarta Timur",
      fasilitas: "Area bermain.",
      jam: "Data tidak tersedia",
      kontak: "Data tidak tersedia",
      image: "assets/images/gedung-trikora.png",
    },
  ];

  const rptraList = document.getElementById("rptraList");
  const searchInput = document.getElementById("searchRptra");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const rptraModal = document.getElementById("rptraModal");
  const modalClose = rptraModal?.querySelector(".modal-close");

  const renderRptras = (filter = "semua", query = "") => {
    if (!rptraList) return;
    rptraList.innerHTML = "";
    const lowerCaseQuery = query.toLowerCase().trim();

    const filteredData = rptraData.filter((rptra) => {
      const matchesFilter =
        filter === "semua" || rptra.kota.toLowerCase() === filter;
      const matchesSearch = Object.values(rptra).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(lowerCaseQuery)
      );
      return matchesFilter && matchesSearch;
    });

    if (filteredData.length === 0) {
      rptraList.innerHTML =
        "<p style='text-align:center;grid-column:1/-1;'>Tidak ada RPTRA yang ditemukan.</p>";
    } else {
      filteredData.forEach((rptra) => {
        const card = document.createElement("a");
        card.classList.add("rptra-card");
        card.href = "#";
        card.innerHTML = `<img src="${rptra.image}" alt="RPTRA ${rptra.name}" class="rptra-image"><div class="rptra-info"><h3>${rptra.name}</h3><p>${rptra.address}</p></div>`;
        card.addEventListener("click", (e) => {
          e.preventDefault();
          showRptraModal(rptra);
        });
        rptraList.appendChild(card);
      });
    }
  };

  const showRptraModal = (rptra) => {
    if (rptraModal) {
      rptraModal.querySelector("#modalRptraName").textContent = rptra.name;
      rptraModal.querySelector("#modalRptraAddress").textContent =
        rptra.address;
      rptraModal.querySelector("#modalRptraFacilities").textContent =
        rptra.fasilitas;
      rptraModal.querySelector("#modalRptraOperationalHours").textContent =
        rptra.jam;
      rptraModal.querySelector("#modalRptraContact").textContent = rptra.kontak;
      rptraModal.querySelector("#modalRptraImage").src = rptra.image;
      rptraModal.querySelector(
        "#modalRptraImage"
      ).alt = `Foto RPTRA ${rptra.name}`;
      rptraModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  };

  // Event listener untuk tombol filter
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderRptras(button.dataset.filter, searchInput?.value);
      });
    });
  }

  // Event listener untuk input pencarian
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activeFilter =
        document.querySelector(".filter-btn.active")?.dataset.filter || "semua";
      renderRptras(activeFilter, searchInput.value);
    });
  }

  // Event listener untuk menutup modal
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      rptraModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Panggil fungsi render pertama kali
  renderRptras();
});
