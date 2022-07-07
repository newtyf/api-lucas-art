import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BooksModule } from './modules/books/books.module';
import { UsersModule } from './modules/users/users.module';
import { CollectionsModule } from './modules/collections/collections.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://supertest:728Wg0LPfZnAnb4k@universe.zuori.mongodb.net/believe?retryWrites=true&w=majority'),
        AuthModule,
        BooksModule,
        UsersModule,
        CollectionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
