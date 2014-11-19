Windows        | Mac/Linux
-------------- | ------------
Nothing yet... | Nothing yet...

![Graph](logo.svg)

# Asll

Analisador sintático LL: Um analisador sintático LL é um algoritmo de análise
sintática para um sub-conjunto de gramáticas livre de contexto.

# Procedimento de análise

O analisador sintático primeiro lê o terminal ( da entrada da GLC, e o S
empilhado. Deve-se aplicar a regra 2, isto é, reescrever S para ( S + F ) na
pilha e escrever o número dessa regra na saída de dados. No próximo passo é
removido o ( da entrada de dados e da pilha. Agora o analisador verifica o
terminal 1 na entrada de texto então aplica a regra 1 e então a regra 3 da GLC,
e escreve seus números na saída de dados.

Nos próximos dois passos o analisador sintático lê o 1 e o + da entrada de dados
e os compara aos valores da pilha. Como são iguais, eles são removidos da pilha.
Nos próximos três passos o F será substituído da pilha por 1, e o número 3 (a
regra gramatical) será escrita na saída de dados. Então o 1 e o ) são removidos
da pilha e da entrada de dados. Por fim, o analisador termina com `$` tanto na
pilha quanto na entrada de dados. Nesse caso será retornado que a cadeia de
caracteres de entrada foi aceita, e na saída de dados está a lista de regras
usadas na análise.

Como pode ser visto no exemplo, o analisador sintático LL realiza três tipos de
passos dependendo do conteúdo do topo da pilha, seja não-terminal, terminal ou
`$`:

- Se o topo é não terminal então ele verifica a tabela de análise, com base do
valor não terminal e o símbolo na entrada de dados, qual regra da GLC deve ser
usada. O número da regra é escrito na saída de dados.

- Se a tabela de análise indica que não há regra programada, é retornado um
erro.

- Se o topo é terminal então ele compara o símbolo na entrada com o símbolo do
topo da pilha, e se são iguais ambos são removidos. Se eles não são iguais é
retornado um erro de sintaxe.

- Se o topo é `$` e na entrada de dados também existe um `$` então ele retorna
sucesso de análise, senão erro de sintaxe. Parecido com o tratamento para um
topo terminal, note que nesse caso o algoritmo é terminado em ambos os casos.

Esses três passos são repetidos até o algoritmo parar, seja com sucesso ou com
erro.

# Disciplina

INE5421-05208 (20142)
