// Questão 02 - Escreva um programa que contenha uma função que calcule a soma de todos os valores armazenados em uma lista encadeada de números inteiros.

#include <stdio.h>
#include <stdlib.h>

typedef struct Node 
{
   int data;
   struct Node* next;
} Node;

int addList(Node* head) 
{
   int add = 0;
   Node* actual = head;

   while(actual != NULL)
   {
      add += actual->data; 
      actual = actual->next;
   }

   return add;
}

void insertInOutset(Node** head, int valor)
{
   Node* new = (Node*) malloc(sizeof(Node));
   new->data = valor;   
   new->next = *head;
   *head = new;
}

int main()
{
   Node* list = NULL;

   insertInOutset(&list, 10);
   insertInOutset(&list, 20);
   insertInOutset(&list, 30);

   printf("Soma dos valores da lista: %d\n", addList(list));

   return 0;
}