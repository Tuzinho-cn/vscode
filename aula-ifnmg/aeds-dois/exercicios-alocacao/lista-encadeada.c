// Questão 01- Escreva um programa que contenha uma  função que conte o número de nós de uma lista encadeada

#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
   int data;
   struct Node* next;
} Node;

int countNodes(Node* head)
{
   int contador = 0;
   
   Node* atual = head;

   while(atual != NULL)
   {
      contador++;
      atual = atual->next;
   }

   return contador;
}

void insertInOutset(Node** head, int valor)
{
   Node* novo = (Node*) malloc(sizeof(Node));
   novo->data = valor;
   novo->next = *head;
   *head = novo; 
}

int main()
{
   Node* lista = NULL;

   insertInOutset(&lista, 10);
   insertInOutset(&lista, 20);
   insertInOutset(&lista, 30);

   printf("Número de nós da lista: %d\n", countNodes(lista));

   return 0;
}