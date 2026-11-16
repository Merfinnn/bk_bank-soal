const mainArchiveUrl = "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing";
const archiveUrlsByCourse = {
  "Bahasa Indonesia": "https://drive.google.com/drive/folders/1KhD-cNFi_ZmJWq8Ga7JNcAjN4H8GvKwN?usp=sharing",
  "Bahasa Inggris": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pancasila": "https://drive.google.com/drive/folders/1W_56WCyVGgocGAk9pHZ2ym6LRnWy6J3P?usp=drive_link",
  "Berpikir Komputasional": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kalkulus Dasar": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kewirausahaan": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Logika Informatika": "https://drive.google.com/drive/folders/1jFPqFm-x-KHBS0HWypFK4TKNNzTHayYJ?usp=drive_link",
  "Algoritma dan Pemrograman": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Agama": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kewarganegaraan": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kalkulus Lanjut": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sistem Digital": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Matematika Diskrit": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Basis Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Struktur Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Literasi Inteligensi Artifisial": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Organisasi dan Arsitektur Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Aljabar Linier dan Matriks": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Rekayasa Perangkat Lunak": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pemrograman Berorientasi Objek": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pemrograman Sistem": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Probabilitas dan Statistika": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sistem Operasi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pendidikan Anti Korupsi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Inteligensi Artifisial": "https://drive.google.com/drive/folders/1uMIS3C7tvSpPEJ7yJrrdNLJdNkzMpAl_?usp=drive_link",
  "Komputasi Paralel dan Terdistribusi": "https://drive.google.com/drive/folders/1qlmVX4rzz4K_tCRXF2snBPH7xsNEHFa7?usp=drive_link",
  "Interaksi Manusia-Komputer": "https://drive.google.com/drive/folders/11OooHJrMn4GbcOmU0Ej58he8tY077CH8?usp=drive_link",
  "Keamanan Informasi": "https://drive.google.com/drive/folders/1K8qYSXas4pJkVgj8Aii6PMrir47hILXW?usp=drive_link",
  "Komputasi Awan": "https://drive.google.com/drive/folders/1Fq5q0WcIsNObnh2pv2U_VzvBvx8o_A_2?usp=drive_link",
  "Teori Bahasa dan Otomata": "https://drive.google.com/drive/folders/1zyDMtM8ZmKA4Q1c5vMS2w0jycp8qCW3q?usp=drive_link",
  "Pengujian dan Implementasi Sistem": "https://drive.google.com/drive/folders/1a_5-0tszhmsyZHstxb1Gbc0AiA0VpjD9?usp=drive_link",
  "Kuliah Kerja Nyata (KKN)": "https://drive.google.com/drive/folders/1bhCRayeA3kve1QahRYvCTtU13MV3Pn4S?usp=drive_link",
  "Jaringan Komputer": "https://drive.google.com/drive/folders/1RjLxHvGJCZr_TWkoF_vN_oCpWH0q3X5T?usp=sharing",
  "Pemodelan dan Simulasi": "https://drive.google.com/drive/folders/1WyUHGLuQ3M3FQdegWv1JZRT7G2laG7pF?usp=sharing",
  "Strategi Algoritma": "https://drive.google.com/drive/folders/15pKQuf50IMcnZXYkwaPvjtiWgrXPXDGN?usp=sharing",
  "Sistem Informasi": "https://drive.google.com/drive/folders/1yiWpqxGlrXh8XhmdtBSCeqFI4uoWjvGd?usp=sharing",
  "Sains Data": "https://drive.google.com/drive/folders/12M7ewIR49Vf2iZRae_0HFSiTSUSVolZH?usp=sharing",
  "Pengembangan Aplikasi Berbasis Platform": "https://drive.google.com/drive/folders/1DBq72bKMH812h0IGTpdK22I3-QYPgGFe?usp=sharing",
  "Analisis Numerik": "https://drive.google.com/drive/folders/163w2cbgqBLRDJv11Uk8cKPuc_4efA7ZI?usp=sharing",
  "Etika Profesi": "https://drive.google.com/drive/folders/1DuHikQTvELh6JBRq4Ez3QG51nRP45xsI?usp=sharing",
  "Metodologi Penelitian": "https://drive.google.com/drive/folders/1ZF8M4yNGZAaaK4hwQU9xiEhvEhb6Hw8p?usp=sharing",
  "Internet of Things (IoT)": "https://drive.google.com/drive/folders/1-U45JAfYHDG-7gMul0YceqRlZdymERfQ?usp=sharing",
  "Grafika Komputer": "https://drive.google.com/drive/folders/1JgKleToQ8fE_rr0WDGmCWzfW99-CaxmA?usp=sharing",
  "Pembelajaran Mesin": "https://drive.google.com/drive/folders/1KO6hqheSZtrPmTYfowdrMOdZdg96L_lV?usp=sharing",
  "Manajemen Proyek Perangkat Lunak": "https://drive.google.com/drive/folders/1bXnkoBHfswh0l7UkPZOmBQaNCwUI-j12?usp=sharing",
  "Pemrosesan Bahasa Alami": "https://drive.google.com/drive/folders/1JBnb6hdy6_JOWeFXMFMz3kvmlQoXgEXN?usp=sharing",
  "Representasi Pengetahuan dan Penalaran": "https://drive.google.com/drive/folders/1uITFeCpvsz8UT8LaplLl8ufeYGNxE-nT?usp=sharing",
  "Rekayasa Data": "https://drive.google.com/drive/folders/1sYk_kHBna9VVdbgEDbOMSwWT6f_oodBk?usp=sharing",
  "Digital Forensics": "https://drive.google.com/drive/folders/1UVMoq_nJYidKGEXqw76K1I1YtYIoGlfL?usp=sharing",
  "Ethical Hacking": "https://drive.google.com/drive/folders/19oPgnTY3GQBSdnP0pNkl1eb8msPiAEyA?usp=sharing",
  "Software Defined Network (SDN)": "https://drive.google.com/drive/folders/1uhxmubvZQyi2VY8gQm4qwPqrSCvHHWH3?usp=sharing",
  "Sistem Multimedia": "https://drive.google.com/drive/folders/1FgJ3x1zOGk5I-T_7_AeQhmGCNiBMyS7F?usp=sharing",
  "Animasi Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Basis Data Multimedia": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing"
};

const coursesBySemester = {
  1: [
    "Bahasa Indonesia", "Bahasa Inggris", "Pancasila", "Berpikir Komputasional",
    "Kalkulus Dasar", "Kewirausahaan", "Logika Informatika", "Algoritma dan Pemrograman"
  ],
  2: [
    "Agama", "Kewarganegaraan", "Kalkulus Lanjut", "Sistem Digital",
    "Matematika Diskrit", "Basis Data", "Struktur Data", "Literasi Inteligensi Artifisial"
  ],
  3: [
    "Organisasi dan Arsitektur Komputer", "Aljabar Linier dan Matriks",
    "Rekayasa Perangkat Lunak", "Pemrograman Berorientasi Objek",
    "Pemrograman Sistem", "Probabilitas dan Statistika", "Sistem Operasi"
  ],
  4: [
    "Pendidikan Anti Korupsi", "Jaringan Komputer", "Pemodelan dan Simulasi",
    "Strategi Algoritma", "Sistem Informasi", "Sains Data",
    "Pengembangan Aplikasi Berbasis Platform", "Analisis Numerik"
  ],
  5: [
    "Etika Profesi", "Inteligensi Artifisial", "Komputasi Paralel dan Terdistribusi",
    "Interaksi Manusia-Komputer", "Keamanan Informasi", "Komputasi Awan",
    "Teori Bahasa dan Otomata", "Pengujian dan Implementasi Sistem", "Kuliah Kerja Nyata (KKN)"
  ],
  6: [
    "Metodologi Penelitian", "Internet of Things (IoT)", "Grafika Komputer",
    "Pembelajaran Mesin", "Manajemen Proyek Perangkat Lunak", "Pemrosesan Bahasa Alami",
    "Representasi Pengetahuan dan Penalaran", "Rekayasa Data", "Digital Forensics",
    "Ethical Hacking", "Software Defined Network (SDN)", "Sistem Multimedia",
    "Animasi Komputer", "Basis Data Multimedia"
  ]
};

const tabs = [...document.querySelectorAll(".semester-tab")];
const coursePanel = document.querySelector("#course-panel");
const searchInput = document.querySelector("#course-search");
const emptyState = document.querySelector("#empty-state");
let activeSemester = "1";

document.querySelectorAll(".main-archive-link").forEach((link) => {
  link.href = mainArchiveUrl;
});

function renderCourses() {
  const query = searchInput.value.trim().toLocaleLowerCase("id");
  const filteredCourses = coursesBySemester[activeSemester]
    .filter((course) => course.toLocaleLowerCase("id").includes(query));

  coursePanel.replaceChildren(...filteredCourses.map((course, index) => {
    const row = document.createElement("article");
    row.className = "course-row";

    const info = document.createElement("div");
    info.className = "course-info";

    const number = document.createElement("span");
    number.className = "course-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1).padStart(2, "0");

    const details = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "course-name";
    name.textContent = course;
    const type = document.createElement("p");
    type.className = "course-type";
    type.textContent = `Semester ${activeSemester}`;
    details.append(name, type);
    info.append(number, details);

    const link = document.createElement("a");
    link.className = "folder-button";
    link.href = archiveUrlsByCourse[course];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Buka arsip ${course} di Google Drive`);
    link.innerHTML = 'BUKA ARSIP <span aria-hidden="true">↗</span>';
    row.append(info, link);
    return row;
  }));
  emptyState.hidden = filteredCourses.length > 0;
  coursePanel.hidden = filteredCourses.length === 0;
}

function selectSemester(tab) {
  activeSemester = tab.dataset.semester;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  coursePanel.setAttribute("aria-labelledby", tab.id);
  renderCourses();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectSemester(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
      : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    selectSemester(tabs[nextIndex]);
  });
});

searchInput.addEventListener("input", renderCourses);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuLabel = menuToggle.querySelector(".sr-only");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuLabel.textContent = isExpanded ? "Buka navigasi" : "Tutup navigasi";
  mainNav.classList.toggle("is-open", !isExpanded);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuLabel.textContent = "Buka navigasi";
    mainNav.classList.remove("is-open");
  }
});

renderCourses();
