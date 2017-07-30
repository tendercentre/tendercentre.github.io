---
title: Online Bid
permalink: /online-bid/
layout: default
---

## Please note
Online this form is still under construcion. In the meantime, you can still submit a bid at https://pmtc.xyz/bid

### Online Bid

To submit an online bid, please fill in the form below:

<form name="online-bid" action="/success/" netlify>
  <div class="form-group">
    <h4>Contact Information</h4>
    <label for="fullName">Full name</label>
    <input type="text" name="full-name" class="form-control col-md-5" placeholder="Homer Simpson">
  </div>
  <div class="form-group">
    <label for="address">Residential Address</label>
    <input type="text" name="address" class="form-control col-md-5" placeholder="742 Evergreen Terrace">
  </div>
  <div class="form-group">
    <label for="suburb">Suburb</label>
    <input type="text" name="suburb" class="form-control col-md-5" placeholder="Springfield">
  </div>
  <div class="form-group">
    <label for="phoneNumber">Phone number</label>
    <input type="text" name="phone" class="form-control col-md-5" placeholder="555 7334">
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" name="_replyto" class="form-control col-md-5" placeholder="chunkylover53@aol.com">
  </div>
  <h4>Item description</h4>
  <div class="form-group">
    <label for="lotNumber">Lot Number</label>
    <input type="text" name="lot-no" class="form-control col-md-5" placeholder="12345">
  </div>
  <div class="form-group">
    <label for="lotDescription">Lot Description</label>
    <input type="text" name="description" class="form-control col-md-5" placeholder="Tom Landry's hat">
  </div>
  <div class="form-group">
    <label for="bidPrice">Bid price</label>
    <input type="text" name="bid=price" class="form-control col-md-5" placeholder="$1,000,000">
    <input type="submit" class="btn btn-success" value="Send">
    <input type="hidden" name="_next" value="/success/" />
    <input type="hidden" name="_subject" value="Online bid" />
  </div>
</form>
