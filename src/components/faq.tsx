'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

import { answerQuestion } from '@/ai/flows/ai-powered-faq';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const faqSchema = z.object({
  question: z.string().min(10, 'Sua pergunta deve ter pelo menos 10 caracteres.'),
});

type FaqFormValues = z.infer<typeof faqSchema>;

export function Faq() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(data: FaqFormValues) {
    setIsLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const result = await answerQuestion({ question: data.question });
      setAnswer(result.answer);
    } catch (e) {
      setError('Ocorreu um erro ao buscar a resposta. Tente novamente mais tarde.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold md:text-4xl">Dúvidas Frequentes (com IA)</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma pergunta? Nosso assistente de IA está pronto para ajudar!
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              Pergunte ao nosso assistente
            </CardTitle>
            <CardDescription>
              Digite sua dúvida sobre limpeza de sofás, tecidos ou nosso processo.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Sua Pergunta</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Como funciona a higienização de um sofá de suede?"
                          {...field}
                          rows={3}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Buscando resposta...
                    </>
                  ) : (
                    <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Gerar Resposta
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>

          {(isLoading || answer || error) && (
            <div className="p-6 border-t">
              {isLoading && (
                 <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin"/>
                    <span>Analisando sua pergunta...</span>
                 </div>
              )}
              {error && <Alert variant="destructive"><AlertTitle>Erro</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
              {answer && (
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>Resposta da IA</AlertTitle>
                  <AlertDescription className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                    {answer}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
