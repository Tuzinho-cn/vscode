#include <stdio.h>
#include <stdlib.h>

struct node 
{
   int data;
   struct node *prox;
};

struct node *head, *middle, *last;

int main()
{
   head = (struct node*)malloc(sizeof(struct node));
   middle = (struct node*)malloc(sizeof(struct node));
   last = (struct node*)malloc(sizeof(struct node));

   head->data = 10;
   middle->data = 20;
   last->data = 30;

   head->prox = middle;
   middle->prox = last;
}