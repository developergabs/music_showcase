import { ProductDetails } from "@/components/product-details"

const mockProducts = [
  {
    id: "1",
    name: "Guitarra Stratocaster Fender Player",
    description:
      "A Fender Player Stratocaster é uma guitarra elétrica versátil e de alta qualidade, projetada para músicos que buscam o autêntico som e estilo Fender a um preço acessível. Com corpo em alder, braço em maple e escala em pau-ferro, esta guitarra oferece o clássico timbre Stratocaster com excelente tocabilidade e durabilidade.",
    price: 5999.99,
    images: [
      "/images/fender_squier1.jpg",
      "/images/fender_squier2.jpg",
      "/images/fender_squier3.jpg",
    ],
    category: "cordas",
    slug: "guitarra-stratocaster-fender-player",
    specifications: {
      marca: "Fender",
      modelo: "Player Stratocaster",
      corpo: "Alder (Álamo)",
      braço: "Maple (Bordo)",
      escala: "Pau-ferro",
      trastes: "22 Medium Jumbo",
      captadores: "3 Player Series Alnico 5 Strat Single-Coil",
      controles: "Master Volume, Tone 1 (Neck/Middle), Tone 2 (Bridge)",
      ponte: "2-Point Synchronized Tremolo with Bent Steel Saddles",
      cores: ["Sunburst", "Preto", "Vermelho", "Azul"],
    },
  },
  {
    id: "2",
    name: "Violão Takamine GD30CE",
    description:
      "Violão eletroacústico com cutaway, tampo em abeto sólido, laterais e fundo em mogno. O Takamine GD30CE oferece um som rico e balanceado, ideal para performances ao vivo graças ao seu sistema de captação TK-40D com pré-amplificador embutido e equalizador de 3 bandas.",
    price: 4599.99,
    images: ["/images/takamine_01.jpg", "/images/takamine_02.jpg"],
    category: "cordas",
    slug: "violao-takamine-gd30ce",
    specifications: {
      marca: "Takamine",
      modelo: "GD30CE",
      corpo: "Mogno",
      tampo: "Abeto Sólido",
      braço: "Mogno",
      escala: "Rosewood",
      trastes: "20",
      captação: "TK-40D com pré-amplificador",
      controles: "Equalizador de 3 bandas, Volume, Tuner",
      ponte: "Rosewood",
      cores: ["Natural", "Sunburst"],
    },
  },
  {
    id: "3",
    name: "Baixo Jazz Bass Squier Affinity",
    description:
      "Baixo elétrico de 4 cordas, corpo em poplar, braço em maple, escala em laurel. O Squier Affinity Jazz Bass oferece o clássico som Jazz Bass com ótimo custo-benefício, ideal para iniciantes e músicos intermediários que buscam o tradicional som Fender.",
    price: 3299.99,
    images: ["/images/bass_squier01.jpg", "/images/bass_squier02.jpg"],
    category: "cordas",
    slug: "baixo-jazz-bass-squier-affinity",
    specifications: {
      marca: "Squier by Fender",
      modelo: "Affinity Jazz Bass",
      corpo: "Poplar",
      braço: "Maple",
      escala: "Laurel",
      trastes: "20 Medium Jumbo",
      captadores: "2 Single-Coil Jazz Bass",
      controles: "2 Volume, 1 Tone",
      ponte: "Standard 4-Saddle",
      cores: ["Preto", "Sunburst", "Branco"],
    },
  },
  {
    id: "4",
    name: "Teclado Yamaha PSR-E373",
    description:
      "Teclado arranjador com 61 teclas, 622 timbres, 205 estilos de acompanhamento. O Yamaha PSR-E373 é um teclado versátil com recursos avançados como função de aprendizado, gravação de áudio USB e compatibilidade com aplicativo móvel para controle remoto.",
    price: 2499.99,
    images: ["/images/yamaha_psr1.jpg", "/images/yamaha_psr2.jpg", "/images/yamaha_psr3.jpg"],
    category: "teclas",
    slug: "teclado-yamaha-psr-e373",
    specifications: {
      marca: "Yamaha",
      modelo: "PSR-E373",
      teclas: "61 teclas sensíveis à velocidade",
      polifonia: "48 notas",
      timbres: "622 vozes + 241 vozes XGlite",
      estilos: "205 estilos de acompanhamento",
      efeitos: "DSP com 38 tipos, Reverb (12 tipos), Chorus (5 tipos)",
      funções: "Duo, Split, Layer, Harmony",
      conexões: "USB to Host, AUX IN, Pedal, Phones/Output",
      cores: ["Preto"],
    },
  },
  {
    id: "5",
    name: "Piano Digital Casio Privia PX-S1100",
    description:
      "Piano digital compacto com 88 teclas com ação de martelo, 18 timbres, Bluetooth. O Casio Privia PX-S1100 combina um design ultra-fino com a autêntica sensação de um piano acústico, oferecendo conectividade Bluetooth para uso com aplicativos de música.",
    price: 5999.99,
    images: ["/images/casio_privia01.jpg", "/images/casio_privia02.jpg"],
    category: "teclas",
    slug: "piano-digital-casio-privia-px-s1100",
    specifications: {
      marca: "Casio",
      modelo: "Privia PX-S1100",
      teclas: "88 teclas com ação de martelo escalonada",
      polifonia: "192 notas",
      timbres: "18 timbres",
      efeitos: "Reverb (4 tipos), Chorus (4 tipos), DSP (presets para cada timbre)",
      funções: "Layer, Split, Duet Mode",
      conexões: "USB to Host, USB to Device, Bluetooth, 2x Headphone, Pedal",
      dimensões: "132,2 x 23,2 x 10,2 cm",
      cores: ["Preto", "Branco", "Vermelho"],
    },
  },
  {
    id: "6",
    name: "Bateria Acústica Pearl Roadshow",
    description:
      'Kit completo com bumbo 22", caixa 14", tons 10" e 12", surdo 16", pratos e ferragens. A Pearl Roadshow é uma bateria completa e pronta para tocar, ideal para iniciantes e bateristas intermediários que buscam qualidade e durabilidade.',
    price: 4799.99,
    images: ["/images/pearl_road1.jpg", "/images/pearl_road2.jpg", "/images/pearl_road3.jpg"],
    category: "percussao",
    slug: "bateria-acustica-pearl-roadshow",
    specifications: {
      marca: "Pearl",
      modelo: "Roadshow RS525SC",
      bumbo: '22" x 16"',
      caixa: '14" x 5.5"',
      tons: '10" x 7" e 12" x 8"',
      surdo: '16" x 16"',
      pratos: 'Hi-hat 14" e Crash/Ride 16"',
      ferragens: "Pedal de bumbo, estante de caixa, estante de hi-hat, estante de prato reta",
      material: "Poplar/Asian Mahogany",
      cores: ["Jet Black", "Wine Red", "Bronze Metallic", "Charcoal Metallic"],
    },
  },
  {
    id: "7",
    name: "Amplificador Marshall MG30GFX",
    description:
      "Amplificador para guitarra com 30W, 2 canais, efeitos digitais e entrada para fones. O Marshall MG30GFX oferece o clássico som Marshall em um pacote compacto e versátil, com múltiplos efeitos digitais e possibilidade de conexão com MP3 player.",
    price: 2199.99,
    images: ["/images/marshall_mg1.jpg", "/images/marshall_mg2.jpg"],
    category: "equipamentos",
    slug: "amplificador-marshall-mg30gfx",
    specifications: {
      marca: "Marshall",
      modelo: "MG30GFX",
      potência: "30W",
      canais: "Clean e Overdrive com 4 modos de ganho",
      falante: '10" personalizado',
      efeitos: "Reverb, Delay, Chorus, Phaser, Flanger, Octaver",
      controles: "Gain, Volume, Bass, Middle, Treble, FX, Master Volume",
      conexões: "Entrada para instrumento, MP3 player, fones de ouvido, footswitch",
      dimensões: "42 x 42 x 22 cm",
      peso: "8,3 kg",
    },
  },
  {
    id: "8",
    name: "Pedaleira Multi-efeitos Boss GT-1000CORE",
    description:
      "Pedaleira multi-efeitos com tecnologia AIRD, 24 simulações de amplificadores, Bluetooth. A Boss GT-1000CORE oferece a mesma qualidade de processamento da GT-1000 em um formato mais compacto e flexível, ideal para integração em pedalboards existentes.",
    price: 7499.99,
    images: ["/images/boss_gt1.jpg", "/images/boss_gt2.jpg"],
    category: "equipamentos",
    slug: "pedaleira-multi-efeitos-boss-gt-1000core",
    specifications: {
      marca: "Boss",
      modelo: "GT-1000CORE",
      processador: "DSP BOSS de última geração",
      simulações: "24 amplificadores AIRD",
      efeitos: "Mais de 140 efeitos diferentes",
      conexões: "2x Input, 2x Output (L/Mono, R), 2x Aux In, Phones, MIDI In/Out, USB, Bluetooth",
      controles: "6 botões de controle, 3 footswitches",
      display: "LCD gráfico",
      dimensões: "173 x 158 x 57 mm",
      peso: "1,1 kg",
    },
  },
]

const getProductBySlug = (slug: string) => {
  return mockProducts.find((product) => product.slug === slug) || mockProducts[0]
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params

  const product = getProductBySlug(resolvedParams.slug)

  return <ProductDetails product={product} />
}
