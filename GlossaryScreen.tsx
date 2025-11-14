import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import useStore from './store'
import { glossaryTerms } from './data'
import { ArrowLeft, Search } from 'lucide-react'

export default function GlossaryScreen() {
  const { goBack } = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(glossaryTerms.map((term) => term.category)))

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      searchQuery === '' ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = !selectedCategory || term.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-3xl font-bold">Pathology Glossary</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive terminology reference for histopathology
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No terms found matching your search</p>
            </CardContent>
          </Card>
        ) : (
          filteredTerms.map((term) => (
            <Card key={term.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <Badge variant="outline">{term.category}</Badge>
                    </div>
                    {term.synonyms.length > 0 && (
                      <div className="text-sm text-muted-foreground mb-3">
                        Also known as: {term.synonyms.join(', ')}
                      </div>
                    )}
                    <CardDescription className="text-base">{term.definition}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              {(term.examples.length > 0 || term.relatedTerms.length > 0) && (
                <CardContent className="space-y-3">
                  {term.examples.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {term.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {term.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Related Terms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((related, i) => (
                          <Badge key={i} variant="secondary">
                            {related}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
