// 4. O Guardião da Senha
// Enunciado:
// Peça ao usuário uma senha numérica de 4 dígitos. O programa deve verificar se ela é crescente, decrescente ou aleatória.
// Exemplo:

// 1234 → crescente

// 4321 → decrescente

// 1423 → aleatória

// Desafio lógico:
// Como comparar os dígitos de um número inteiro sem usar strings nem vetores?

// Objetivo técnico:
// Manipular números com divisão e módulo para extrair cada dígito e compará-los logicamente.


#include <stdio.h>

int main()
{
   int password;
   printf("Digite uma senha numerica de 4 digitos: ");
   scanf("%d", &password);
}