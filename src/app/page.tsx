import Link from "next/link"
import { MoveRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import ProductGrid from "@/components/product-grid"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Seção Hero - Reduzido o padding vertical e ajustado para centralizar */}
        <section className="w-full py-6 md:py-10 lg:py-12 bg-gradient-to-r from-amber-50 to-yellow-100 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Encontre o instrumento perfeito para sua música
                  </h1>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl">
                    Qualidade, variedade e os melhores preços em instrumentos musicais e equipamentos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/produtos">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                      Ver catálogo
                      <MoveRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contato">
                    <Button size="lg" variant="outline">
                      Fale conosco
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-center">
                <img
                  src="/images/intrumentos.jpg"
                  width={450}
                  height={450}
                  alt="Instrumentos musicais"
                  className="aspect-square rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Mais Procurados */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mais Procurados</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra os instrumentos e equipamentos mais populares da nossa loja
                </p>
              </div>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* Seção Nosso Catálogo */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nosso Catálogo</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossa ampla seleção de instrumentos e equipamentos musicais
                </p>
              </div>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
