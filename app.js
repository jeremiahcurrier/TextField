(function() {

  return {
    events: {
      'ticket.custom_field_{{reference_field_id}}.changed' : 'dataChanged'
    },

    dataChanged: function() {
      var ticket = this.ticket(),
          textFieldId = this.setting('textFieldId'),
          checkbox = this.ticket().customField('custom_field_' + this.setting('reference_field_id'));

      if (ticket.assignee().user() === undefined ) {
        console.log('undefined assignee');
        if (ticket.assignee().group() === undefined ) {
          console.log('undefined assignee & group');
        } else {
          if (checkbox == 'yes') {
            ticket.customField('custom_field_' + textFieldId, this.ticket().assignee().group().name());
            console.log(this.ticket().assignee().group().name());
          } else if (checkbox == 'no') {
            ticket.customField('custom_field_' + textFieldId, '');
            console.log('The checkbox is not checked');
          }
        }        
      } else {
        if (checkbox == 'yes') {
          ticket.customField('custom_field_' + textFieldId, this.ticket().assignee().user().name());
          console.log(this.ticket().assignee().user().name());
        } else if (checkbox == 'no') {
          ticket.customField('custom_field_' + textFieldId, '');
          console.log('The checkbox is not checked');
        }
      }

    }
  };

}());
