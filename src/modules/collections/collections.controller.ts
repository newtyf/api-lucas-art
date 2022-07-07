import { Body, Controller, Get, HttpStatus, Param, Post, Request, Response, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CollectionsService } from './collections.service';
import { CollectionDTO } from './dto/collection.dto';
import { ItemsService } from './items.service';
import { ItemDocument } from './schema/item.schema';

@Controller('collections')
export class CollectionsController {
    constructor(
        private readonly service: CollectionsService,
        private readonly itemService: ItemsService
    ) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async collections(@Response() response, @Request() req ) {
        const data = await this.service.findAllByUser(req.user.id);
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getById(@Response() response, @Param('id') id: string) {
        const data = await this.service.findOne(id);
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Response() response, @Request() req, @Body() collectionDTO: CollectionDTO) {
        const data = await this.service.create(req.user, collectionDTO);
        
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };

    @Get(':id/items')
    @UseGuards(JwtAuthGuard)
    async getItems(@Response() response, @Param('id') id: string) {
        const data = await this.itemService.findAllByCollection(id);
        
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };

    @Post(':id/add-item')
    @UseGuards(JwtAuthGuard)
    async addItem(@Response() response, @Body() item: ItemDocument, @Param('id') id: string) {
        const data = await this.itemService.add(item);
        
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };
}
