/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {ReflectiveInjector} from '@angular/core';
import {ValueUnitPair} from './value-unit-pair';
import {DataRateUnits} from '../enums/data-rate-units.enum';
import {DataRateConversionService} from '../services/data-rate-conversion.service';

/**
 * ValueUnitPair for speed units
 */

export class DataRate extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = DataRateUnits.MB_S, value = 0.0) {
    super(unit, value, DataRateUnits.MB_S);
    const injector               = ReflectiveInjector.resolveAndCreate([DataRateConversionService]);
    this._valueConversionService = injector.get(DataRateConversionService);
  }
}
