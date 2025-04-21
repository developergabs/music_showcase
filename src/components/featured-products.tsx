"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

const featuredProducts = [
  {
    id: "1",
    name: "Guitarra Stratocaster Fender Player",
    description: "Guitarra elétrica Stratocaster da série Player, corpo em alder, braço em maple, escala em pau-ferro",
    price: 5999.99,
    images: [
      "/images/fender_squier1.jpg",
      "/images/fender_squier2.jpg",
      "/images/fender_squier3.jpg",
    ],
    category: "cordas",
    slug: "guitarra-stratocaster-fender-player",
  },
  {
    id: "4",
    name: "Teclado Yamaha PSR-E373",
    description: "Teclado arranjador com 61 teclas, 622 timbres, 205 estilos de acompanhamento",
    price: 2499.99,
    images: ["/images/yamaha_psr1.jpg", "/images/yamaha_psr2.jpg", "/images/yamaha_psr3.jpg"],
    category: "teclas",
    slug: "teclado-yamaha-psr-e373",
  },
  {
    id: "6",
    name: "Bateria Acústica Pearl Roadshow",
    description: 'Kit completo com bumbo 22", caixa 14", tons 10" e 12", surdo 16", pratos e ferragens',
    price: 4799.99,
    images: ["/images/pearl_road1.jpg", "/images/pearl_road2.jpg", "/images/pearl_road3.jpg"],
    category: "percussao",
    slug: "bateria-acustica-pearl-roadshow",
  },
  {
    id: "7",
    name: "Amplificador Marshall MG30GFX",
    description: "Amplificador para guitarra com 30W, 2 canais, efeitos digitais e entrada para fones",
    price: 2199.99,
    images: ["/images/marshall_mg1.jpg", "/images/marshall_mg2.jpg"],
    category: "equipamentos",
    slug: "amplificador-marshall-mg30gfx",
  },
  {
    id: "2",
    name: "Violão Takamine GD30CE",
    description: "Violão eletroacústico com cutaway, tampo em abeto sólido, laterais e fundo em mogno",
    price: 4599.99,
    images: ["/images/takamine_01.jpg", "/images/takamine_02.jpg"],
    category: "cordas",
    slug: "violao-takamine-gd30ce",
  },
  {
    id: "3",
    name: "Baixo Jazz Bass Squier Affinity",
    description: "Baixo elétrico de 4 cordas, corpo em poplar, braço em maple, escala em laurel",
    price: 3299.99,
    images: ["/images/bass_squier01.jpg", "/images/bass_squier02.jpg"],
    category: "cordas",
    slug: "baixo-jazz-bass-squier-affinity",
  },
  {
    id: "5",
    name: "Piano Digital Casio Privia PX-S1100",
    description: "Piano digital compacto com 88 teclas com ação de martelo, 18 timbres, Bluetooth",
    price: 5999.99,
    images: ["/images/casio_privia01.jpg", "/images/casio_privia02.jpg"],
    category: "teclas",
    slug: "piano-digital-casio-privia-px-s1100",
  },
  {
    id: "8",
    name: "Pedaleira Multi-efeitos Boss GT-1000CORE",
    description: "Pedaleira multi-efeitos com tecnologia AIRD, 24 simulações de amplificadores, Bluetooth",
    price: 7499.99,
    images: ["/images/boss_gt1.jpg", "/images/boss_gt2.jpg"],
    category: "equipamentos",
    slug: "pedaleira-multi-efeitos-boss-gt-1000core",
  },
]

export default function FeaturedProducts() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [autoScrollEnabled, setAutoScrollEnabled] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(0)
  const [visibleProducts, setVisibleProducts] = React.useState(3)
  const [isMounted, setIsMounted] = React.useState(false)
  const [containerWidth, setContainerWidth] = React.useState(0)

  React.useEffect(() => {
    setIsMounted(true)

    const updateContainerWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.clientWidth)
      }
    }

    updateContainerWidth()

    window.addEventListener("resize", updateContainerWidth)

    return () => window.removeEventListener("resize", updateContainerWidth)
  }, [])

  const totalPages = React.useMemo(() => Math.ceil(featuredProducts.length / visibleProducts), [visibleProducts])

  const scrollToNextPage = React.useCallback(() => {
    if (scrollContainerRef.current) {
      const nextPage = (currentPage + 1) % totalPages
      setCurrentPage(nextPage)

      const scrollAmount = nextPage * containerWidth
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentPage, totalPages, containerWidth])

  React.useEffect(() => {
    if (!isMounted) return

    let intervalId: NodeJS.Timeout | null = null

    if (autoScrollEnabled) {
      intervalId = setInterval(() => {
        scrollToNextPage()
      }, 4000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoScrollEnabled, scrollToNextPage, isMounted])

  const handleMouseEnter = () => setAutoScrollEnabled(false)
  const handleMouseLeave = () => setAutoScrollEnabled(true)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPage = currentPage > 0 ? currentPage - 1 : totalPages - 1
      setCurrentPage(newPage)

      const scrollAmount = newPage * containerWidth
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    scrollToNextPage()
  }

  const cardWidth = containerWidth > 0 ? containerWidth / visibleProducts : 0

  return (
    <div className="relative mt-8">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background shadow-md md:h-10 md:w-10"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory overflow-x-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-none w-full flex justify-center gap-4"
              style={{ width: containerWidth > 0 ? `${containerWidth}px` : "100%" }}
            >
              {featuredProducts.slice(pageIndex * visibleProducts, (pageIndex + 1) * visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="flex-none"
                  style={{ width: cardWidth > 0 ? `${cardWidth - 16}px` : "33%" }} // 16px para o gap
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background shadow-md md:h-10 md:w-10"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {isMounted &&
          Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${currentPage === index ? "bg-amber-600" : "bg-gray-300"}`}
              onClick={() => {
                setCurrentPage(index)
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * containerWidth,
                    behavior: "smooth",
                  })
                }
              }}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
      </div>
    </div>
  )
}
