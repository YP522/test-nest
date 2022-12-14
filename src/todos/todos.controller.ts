import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get(':id')
    findOne(@Param('id') id: string){
        console.log('id', id);
        return this.todosService.findOne(id);
    }

    @Get()
    findAll(): any[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo : CreateTodoDto){
        console.log('newtodo', newTodo);
        this.todosService.create(newTodo)
    }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
        return this.todosService.update(id, todo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string){
        return this.todosService.delete(id);
    }

}
