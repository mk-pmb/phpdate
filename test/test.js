/* global describe, it, beforeEach */
'use strict'

var date = require('../')
var assert = require('assert')

process.env.TZ = 'UTC'

describe('date', function () {
  var test_date
  beforeEach(function () {
    test_date = new Date(2016, 1, 4, 3, 24, 5, 34)
  })
  describe('d', function () {
    it('should properly format date with padded zero', function () {
      assert.equal(date('d', test_date), '04')
    })
  })
  describe('j', function () {
    it('should properly format date without padded zero', function () {
      assert.equal(date('j', test_date), '4')
    })
  })
  describe('D', function () {
    it('should format date to short day name', function () {
      assert.equal(date('D', test_date), 'Thu')
      test_date.setMonth(0, 31)
      assert.equal(date('D', test_date), 'Sun')
      test_date.setMonth(1, 1)
      assert.equal(date('D', test_date), 'Mon')
      test_date.setDate(2)
      assert.equal(date('D', test_date), 'Tue')
      test_date.setDate(3)
      assert.equal(date('D', test_date), 'Wed')
      test_date.setDate(5)
      assert.equal(date('D', test_date), 'Fri')
      test_date.setDate(6)
      assert.equal(date('D', test_date), 'Sat')
    })
  })
  describe('l', function () {
    it('should format date to long day name', function () {
      assert.equal(date('l', test_date), 'Thursday')
      test_date.setMonth(0, 31)
      assert.equal(date('l', test_date), 'Sunday')
      test_date.setMonth(1, 1)
      assert.equal(date('l', test_date), 'Monday')
      test_date.setDate(2)
      assert.equal(date('l', test_date), 'Tuesday')
      test_date.setDate(3)
      assert.equal(date('l', test_date), 'Wednesday')
      test_date.setDate(5)
      assert.equal(date('l', test_date), 'Friday')
      test_date.setDate(6)
      assert.equal(date('l', test_date), 'Saturday')
    })
  })
  describe('N', function () {
    it('should format date to iso-8601 day number (monday = 1, sunday = 7)', function () {
      assert.equal(date('N', test_date), '4')
      test_date.setMonth(0, 31)
      assert.equal(date('N', test_date), '7')
      test_date.setMonth(1, 1)
      assert.equal(date('N', test_date), '1')
      test_date.setDate(2)
      assert.equal(date('N', test_date), '2')
      test_date.setDate(3)
      assert.equal(date('N', test_date), '3')
      test_date.setDate(5)
      assert.equal(date('N', test_date), '5')
      test_date.setDate(6)
      assert.equal(date('N', test_date), '6')
    })
  })
  describe('S', function () {
    it('should properly determine ordinality of the date', function () {
      assert.equal(date('jS', test_date), '4th')
      test_date.setMonth(1, 1)
      assert.equal(date('jS', test_date), '1st')
      test_date.setDate(2)
      assert.equal(date('jS', test_date), '2nd')
      test_date.setDate(3)
      assert.equal(date('jS', test_date), '3rd')
    })
  })
  describe('w', function () {
    it('should properly format the day of the week to just a number', function () {
      assert.equal(date('w', test_date), '4')
      test_date.setMonth(0, 31)
      assert.equal(date('w', test_date), '0')
      test_date.setMonth(1, 6)
      assert.equal(date('w', test_date), '6')
    })
  })
  describe('z', function () {
    it('should return the number of days into the year', function () {
      assert.equal(date('z', test_date), '34')
    })
  })
  describe('F', function () {
    it('should return the long month name of the date', function () {
      test_date.setMonth(0, 31)
      assert.equal(date('F', test_date), 'January')
      test_date.setMonth(1, 1)
      assert.equal(date('F', test_date), 'February')
      test_date.setMonth(2, 1)
      assert.equal(date('F', test_date), 'March')
      test_date.setMonth(3, 1)
      assert.equal(date('F', test_date), 'April')
      test_date.setMonth(4, 1)
      assert.equal(date('F', test_date), 'May')
      test_date.setMonth(5, 1)
      assert.equal(date('F', test_date), 'June')
      test_date.setMonth(6, 1)
      assert.equal(date('F', test_date), 'July')
      test_date.setMonth(7, 1)
      assert.equal(date('F', test_date), 'August')
      test_date.setMonth(8, 1)
      assert.equal(date('F', test_date), 'September')
      test_date.setMonth(9, 1)
      assert.equal(date('F', test_date), 'October')
      test_date.setMonth(10, 1)
      assert.equal(date('F', test_date), 'November')
      test_date.setMonth(11, 1)
      assert.equal(date('F', test_date), 'December')
    })
  })
  describe('m', function () {
    it('should return the month number with a padded zero (non-zero indexed)', function () {
      test_date.setMonth(0, 31)
      assert.equal(date('m', test_date), '01')
      test_date.setMonth(1, 1)
      assert.equal(date('m', test_date), '02')
      test_date.setMonth(2, 1)
      assert.equal(date('m', test_date), '03')
      test_date.setMonth(3, 1)
      assert.equal(date('m', test_date), '04')
      test_date.setMonth(4, 1)
      assert.equal(date('m', test_date), '05')
      test_date.setMonth(5, 1)
      assert.equal(date('m', test_date), '06')
      test_date.setMonth(6, 1)
      assert.equal(date('m', test_date), '07')
      test_date.setMonth(7, 1)
      assert.equal(date('m', test_date), '08')
      test_date.setMonth(8, 1)
      assert.equal(date('m', test_date), '09')
      test_date.setMonth(9, 1)
      assert.equal(date('m', test_date), '10')
      test_date.setMonth(10, 1)
      assert.equal(date('m', test_date), '11')
      test_date.setMonth(11, 1)
      assert.equal(date('m', test_date), '12')
    })
  })
  describe('M', function () {
    it('should return the short month name of the date', function () {
      test_date.setMonth(0, 31)
      assert.equal(date('M', test_date), 'Jan')
      test_date.setMonth(1, 1)
      assert.equal(date('M', test_date), 'Feb')
      test_date.setMonth(2, 1)
      assert.equal(date('M', test_date), 'Mar')
      test_date.setMonth(3, 1)
      assert.equal(date('M', test_date), 'Apr')
      test_date.setMonth(4, 1)
      assert.equal(date('M', test_date), 'May')
      test_date.setMonth(5, 1)
      assert.equal(date('M', test_date), 'Jun')
      test_date.setMonth(6, 1)
      assert.equal(date('M', test_date), 'Jul')
      test_date.setMonth(7, 1)
      assert.equal(date('M', test_date), 'Aug')
      test_date.setMonth(8, 1)
      assert.equal(date('M', test_date), 'Sep')
      test_date.setMonth(9, 1)
      assert.equal(date('M', test_date), 'Oct')
      test_date.setMonth(10, 1)
      assert.equal(date('M', test_date), 'Nov')
      test_date.setMonth(11, 1)
      assert.equal(date('M', test_date), 'Dec')
    })
  })
  describe('n', function () {
    it('should return the month number without a padded zero (non-zero indexed)', function () {
      test_date.setMonth(0, 31)
      assert.equal(date('n', test_date), '1')
      test_date.setMonth(1, 1)
      assert.equal(date('n', test_date), '2')
      test_date.setMonth(2, 1)
      assert.equal(date('n', test_date), '3')
      test_date.setMonth(3, 1)
      assert.equal(date('n', test_date), '4')
      test_date.setMonth(4, 1)
      assert.equal(date('n', test_date), '5')
      test_date.setMonth(5, 1)
      assert.equal(date('n', test_date), '6')
      test_date.setMonth(6, 1)
      assert.equal(date('n', test_date), '7')
      test_date.setMonth(7, 1)
      assert.equal(date('n', test_date), '8')
      test_date.setMonth(8, 1)
      assert.equal(date('n', test_date), '9')
      test_date.setMonth(9, 1)
      assert.equal(date('n', test_date), '10')
      test_date.setMonth(10, 1)
      assert.equal(date('n', test_date), '11')
      test_date.setMonth(11, 1)
      assert.equal(date('n', test_date), '12')
    })
  })
  describe('L', function () {
    it('should return 0 for non-leap-years', function () {
      [2015, 2013, 2011, 2003, 1997, 1998, 1986].forEach(function (y) {
        test_date.setYear(y)
        assert.equal(date('L', test_date), '0')
      })
    })
    it('should return 1 for leap-years', function () {
      [2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988].forEach(function (y) {
        test_date.setYear(y)
        assert.equal(date('L', test_date), '1')
      })
    })
  })
  describe('t', function () {
    it('should return the number of calendar days for the set month', function () {
      assert.equal(date('t', test_date), '29')
      test_date.setYear(2015)
      assert.equal(date('t', test_date), '28')
      test_date.setMonth(0, 4)
      assert.equal(date('t', test_date), '31')
      test_date.setMonth(3, 1)
      assert.equal(date('t', test_date), '30')
    })
  })
  describe('Y', function () {
    it('should return the full year', function () {
      assert.equal(date('Y', test_date), '2016')
      test_date.setYear(2012)
      assert.equal(date('Y', test_date), '2012')
    })
  })
  describe('y', function () {
    it('should return the truncated year (1998 -> 98)', function () {
      assert.equal(date('y', test_date), '16')
      test_date.setYear(2012)
      assert.equal(date('y', test_date), '12')
      test_date.setYear(2000)
      assert.equal(date('y', test_date), '00')
    })
  })
  describe('a', function () {
    it('should return am or pm depending on the hour of day', function () {
      assert.equal(date('a', test_date), 'am')
      test_date.setHours(0)
      assert.equal(date('a', test_date), 'am')
      test_date.setHours(23)
      assert.equal(date('a', test_date), 'pm')
      test_date.setHours(12)
      assert.equal(date('a', test_date), 'pm')
    })
  })
  describe('A', function () {
    it('should return AM or PM depending on the hour of the day', function () {
      assert.equal(date('A', test_date), 'AM')
      test_date.setHours(0)
      assert.equal(date('A', test_date), 'AM')
      test_date.setHours(23)
      assert.equal(date('A', test_date), 'PM')
      test_date.setHours(12)
      assert.equal(date('A', test_date), 'PM')
    })
  })
  describe('g', function () {
    it('should return non-military hour without a leading zero', function () {
      assert.equal(date('g', test_date), '3')
      test_date.setHours(15)
      assert.equal(date('g', test_date), '3')
      test_date.setHours(0)
      assert.equal(date('g', test_date), '12')
      test_date.setHours(12)
      assert.equal(date('g', test_date), '12')
    })
  })
  describe('G', function () {
    it('should return military hour without a leading zero', function () {
      assert.equal(date('G', test_date), '3')
      test_date.setHours(15)
      assert.equal(date('G', test_date), '15')
      test_date.setHours(0)
      assert.equal(date('G', test_date), '0')
      test_date.setHours(12)
      assert.equal(date('G', test_date), '12')
    })
  })
  describe('h', function () {
    it('should return non-military hour with a leading zero', function () {
      assert.equal(date('h', test_date), '03')
      test_date.setHours(15)
      assert.equal(date('h', test_date), '03')
      test_date.setHours(0)
      assert.equal(date('h', test_date), '12')
      test_date.setHours(12)
      assert.equal(date('h', test_date), '12')
    })
  })
  describe('H', function () {
    it('should return military hour with a leading zero', function () {
      assert.equal(date('H', test_date), '03')
      test_date.setHours(15)
      assert.equal(date('H', test_date), '15')
      test_date.setHours(0)
      assert.equal(date('H', test_date), '00')
      test_date.setHours(12)
      assert.equal(date('H', test_date), '12')
    })
  })
  describe('i', function () {
    it('should return the minutes with a leading zero', function () {
      assert.equal(date('i', test_date), '24')
      test_date.setMinutes(3)
      assert.equal(date('i', test_date), '03')
    })
  })
  describe('s', function () {
    it('should return the seconds with a leading zero', function () {
      assert.equal(date('s', test_date), '05')
      test_date.setSeconds(45)
      assert.equal(date('s', test_date), '45')
    })
  })
  describe('u', function () {
    it('should return the milliseconds with a leading zero', function () {
      assert.equal(date('s.u', test_date), '05.034')
    })
  })
  describe('U', function () {
    it('should return the seconds since the unix epoch', function () {
      assert.equal(date('U', test_date), '1454556245')
    })
  })
  describe('P', function () {
    it('should return the timezone offset seperated by a colon', function () {
      assert.equal(date('P', test_date), '+00:00')
    })
  })
  describe('O', function () {
    it('should return the timezone offset not seperated by a colon', function () {
      assert.equal(date('O', test_date), '+0000')
    })
  })
  describe('c', function () {
    it('should return the date formatted in iso 8601 format', function () {
      assert.equal(date('c', test_date), '2016-02-04T03:24:05+00:00')
    })
  })
  describe('r', function () {
    it('should return the date formatted rfc2822 format', function () {
      assert.equal(date('r', test_date), 'Thu, 04 Feb 2016 03:24:05 +0000')
    })
  })
  describe('letter escaping', function () {
    it('should skip over letters that are prefixed with a slash (\\)', function () {
      assert.equal(date('\\rc', test_date), 'r2016-02-04T03:24:05+00:00')
      assert.equal(date('Y-\\m-d H:\\i:s', test_date), '2016-m-04 03:i:05')
    })
  })
})
