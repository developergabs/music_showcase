import type { Metadata } from "next"
import ProductGrid from "@/components/product-grid"

export const metadata: Metadata = {
  title: "Produtos | Music Store",
  description: "Explore nossa coleção completa de instrumentos e equipamentos musicais",
}

export default function ProductsPage({ searchParams }: { searchParams: { q?: string } }) {
  const searchQuery = searchParams.q || ""

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 max-w-7xl">
      <div className="mb-8">
        {searchQuery ? (
          <>
            <h1 className="text-3xl font-bold">Resultados para "{searchQuery}"</h1>
            <p className="mt-2 text-muted-foreground">Produtos encontrados para sua busca</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Todos os Produtos</h1>
            <p className="mt-2 text-muted-foreground">
              Explore nossa coleção completa de instrumentos e equipamentos musicais
            </p>
          </>
        )}
      </div>

      <ProductGrid searchQuery={searchQuery} />
    </div>
  )
}
