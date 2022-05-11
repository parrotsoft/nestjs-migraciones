import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { City } from './entities/city.entity';
import { Countries } from './entities/countries.entity';
import { Driver_licenses } from './entities/driver_licenses.entity';
import { Drivers } from './entities/drivers.entity';
import { License_types } from './entities/license_types.entity';
import { Riders } from './entities/riders.entity';
import { UserAddress } from './entities/user_address.entity';
import { Users } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my-app',
      entities: [
        City,
        Countries,
        Driver_licenses,
        Drivers,
        License_types,
        Riders,
        UserAddress,
        Users,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
