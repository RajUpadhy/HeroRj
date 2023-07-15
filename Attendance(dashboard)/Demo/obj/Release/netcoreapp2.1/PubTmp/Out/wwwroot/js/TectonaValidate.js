var $validatorform;

function validateSingleForm(form) {
    $.validator.addMethod(
        "commonvalidation",
        function (value, element, param) {
            return value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/);
        },
        "Please enter valid input"
    );
    $.validator.addMethod(
        "onlynumber",
        function (value, element, param) {
            return value.match(/^(0|[1-9]\d*)$/);
        },
        "Please enter only degit"
    );
    $.validator.addMethod(
        "specialcharactor",
        function (value, element, param) {
            return value.match(/^[0-9A-Za-z\_\ \.\@]*$/);
        },
        "Special character is not allowed"
    );
    //debugger;  
    $validatorform = jQuery(form).validate({
        rules: {
            add_contract_name: {
                required: true,
                specialcharactor: true,
            },
            add_contract_vender: {
                required: true,
            },
            add_contract_start_date: {
                required: true,
            },
            add_contract_end_date: {
                required: true,
            },
            add_contract_description: {
                required: true,
            },
            //add_contract_attachment: {
            //    required: true,
            //},
            add_contract_notify: {
                required: true,
            },
            Add_clause_RefNo: {
                required: true,
                onlynumber: true,
            },
            Add_clause_name: {
                required: true,
            },
            add_clause_start_date: {
                required: true,
            },
            add_clause_end_date: {
                required: true,
            },
            add_clause_Description: {
                required: true,
            },
            Vendrmngt_Slaname: {
                required: true,
            },
            Vendrmngt_SLA_descb: {
                required: true,
            },
            Vendrmngt_SLA_contrct: {
                required: true,
            },
            Vendrmngt_SLA_gndr: {
                required: true,
            },
            Vendrmngt_SLA_claouse: {
                required: true,
            },
            Vendrmngt_SLA_Role: {
                required: true,
            },
            Vendrmngt_SLA_notify: {
                required: true,
            },
            Vendrmngt_SLA_days: {
                required: true,
            },
            Vendrmngt_SLA_strdate: {
                required: true,
            },
            Vendrmngt_SLA_enddate: {
                required: true,
            },
            Vendrmngt_SLA_select: {
                required: true,
            },
            Vendrmngt_SLA_select_clause: {
                required: true,
            },
            //Main Screen
            add_main_screen_template_type: {
                required: true,
                specialcharactor: true,
            },
            add_main_screen_template_name: {
                required: true,
                specialcharactor: true,
            },
            add_main_screen_Problem_des: {
                required: true,
                specialcharactor: true,
            },
            //Master Template ValidATION
            add_master_template_Name: {
                required: true,
                // specialcharactor: true,
            },
            Master_Problem_Description: {
                required: true,
                specialcharactor: true,
            },
            //Notification Template Validation
            raiseNotification: {
                required: true,
                specialcharactor: true,
            },
            //Planned Template ValidATION
            Add_planned_Temp_name: {
                required: true,
                specialcharactor: true,
            },
            add_planned_probdiscription: {
                required: true,
                specialcharactor: true,
            },
            //Exception Template 
            Add_raise_exception: {
                required: true,
                specialcharactor: true,
            },
            Add_Close_Exception_Description: {
                required: true,
                specialcharactor: true,
            },
            //Workflow Template Validation
            add_workflow_activity_detail_id: {
                required: true,
            },
            add_workflow_Problem_Description: {
                required: true,
            },
            option: {
                required: true,
            },
            //planned
            planned_Template_Name: {
                required: true,
            },
            //Master
            add_main_screen_template_type: {
                required: true,
            },
            //work flow activity validation
            add_workflow_activity_detail_id: {
                required: true,
            },
            //Group Ticket
            group_ticket_name: {
                required: true,
            },
            group_ticket_desc: {
                required: true,
            },
            //Master Ticket SD
            MasterTicketChooseTemplate: {
                required: true,
            },
            MasterTicketLinkTo: {
                required: true,
            },
            MasterTicketOU: {
                required: true,
            },
            MasterTicketUser: {
                required: true,
            },
            MasterTicketDevice: {
                required: true,
            },
            //knowledgeBase SD
            create_kb_question: {
                required: true,
            },
            create_kb_answer: {
                required: true,
            },
            //knowlwdgebase User
            user_knowledgebase_question: {
                required: true,
            },
            user_knowledgebase_answer: {
                required: true,
            },
            //CustomeKB User
            create_problem: {
                required: true,
            },
            create_description: {
                required: true,
            },
            create_Cretgory: {
                required: true,
            },
            create_SubCretgory: {
                required: true,
            },
            create_item: {
                required: true,
            },
            //Group Ticket SD
            select_grp_tkt_ou: {
                required: true,
            },
            select_grp_tkt_category: {
                required: true,
            },
            select_grp_tkt_sub_category: {
                required: true,
            },
            select_grp_tkt_item: {
                required: true,
            },
            //create ticket User
            ctProblem: {
                required: true,
            },
            ctDescription: {
                required: true,
            },
            ctCategory: {
                required: true,
            },
            ctSubcategory: {
                required: true,
            },
            ctItem: {
                required: true,
            },
            //planned ticket
            PlannedTicketChooseTemplate: {
                required: true,
            },
            PlannedTicketLinkTo: {
                required: true,
            },
            PlannedTicketOU: {
                required: true,
            },
            PlannedTicketUser: {
                required: true,
            },
            PlannedTicketDevice: {
                required: true,
            },
            //create category
            add_new_category_name: {
                required: true,
            },
            add_new_category_description: {
                required: true,
            },
            //create subcategory
            select_category_name: {
                required: true,
            },
            add_sub_category_name: {
                required: true,
            },
            add_sub_category_description: {
                required: true,
            },
            //create Item
            select_category_new_name: {
                required: true,
            },
            select_sub_category_name: {
                required: true,
            },
            add_new_item_name: {
                required: true,
            },
            add_new_item_description: {
                required: true,
            },
            //KB Linkage In Service Delivery
            KBOUID: {
                required: true,
            },
            KBCategory: {
                required: true,
            },
            KBSubcategory: {
                required: true,
            },
            KBItem: {
                required: true,
            },

            //notification ticket
            notification_name: {
                required: true,
            },
            notification_type: {
                required: true,
            },
            dis: {
                required: true,
            },
            creation_date: {
                required: true,
            },
            end_date: {
                required: true,
            },
            send_to: {
                required: true,
            },
            admin: {
                required: true,
            },
            manager: {
                required: true,
            },
            user: {
                required: true,
            },
            priority: {
                required: true,
            },
            //CreateTicket
            CreateTicket_OU_NAME: {
                required: true,
            },
            CreateTicket_DeviceName: {
                required: true,
            },
            CreateTicket_UserName: {
                required: true,
            },
            CreateTicket_TemplateName: {
                required: true,
            },
        },
        messages: {
            add_contract_name: {
                required: "Please Enter Contract Name",
            },
            add_contract_vender: {
                required: "Please Select Vendor ",
            },
            add_contract_start_date: {
                required: "Select Start Date ",
            },
            add_contract_end_date: {
                required: "Select End Date ",
            },
            add_contract_description: {
                required: "Please Enter Description ",
            },
            //add_contract_attachment: {
            //    required: "Please Select File",
            //},
            add_contract_notify: {
                required: "Please Select Any One",
            },
            Add_clause_RefNo: {
                required: "Please Enter Reference No.",
            },
            Add_clause_name: {
                required: "Please Enter Clause Name",
            },
            add_clause_start_date: {
                required: "Select Start Date",
            },
            add_clause_end_date: {
                required: "Select End Date",
            },
            add_clause_Description: {
                required: "Please Enter Description",
            },
            Vendrmngt_Slaname: {
                required: "Please Enter SLA Name",
            },
            Vendrmngt_SLA_descb: {
                required: "Please Enter Description ",
            },
            Vendrmngt_SLA_contrct: {
                required: "Please Select contract",
            },
            Vendrmngt_SLA_gndr: {
                required: "Please Select Any One",
            },
            Vendrmngt_SLA_claouse: {
                required: "Please Select Claouse",
            },
            Vendrmngt_SLA_Role: {
                required: "Please Select Role",
            },
            Vendrmngt_SLA_notify: {
                required: "Please Select Notify",
            },
            Vendrmngt_SLA_days: {
                required: "Please Select Resolution Time",
            },
            Vendrmngt_SLA_strdate: {
                required: "Select Start Date",
            },
            Vendrmngt_SLA_enddate: {
                required: "Select End Date",
            },
            Vendrmngt_SLA_select: {
                required: "Please Select Contract",
            },
            Vendrmngt_SLA_select_clause: {
                required: "Please Select Clause",
            },
            //Master Template Validation
            add_master_template_Name: {
                required: "Please Select Template Name",
            },
            Master_Problem_Description: {
                required: "Please Enter Problem Description Name",
            },
            //notification template validation
            raiseNotification: {
                required: "please Enter  Raise Notification",
            },
            //Planned Template Validation
            planned_Template_Name: {
                required: "Please Enter Template Name",
            },
            //Exception Template Validation
            Add_raise_exception: {
                required: "Please Enter Add raise exception ",
            },
            Add_Close_Exception_Description: {
                required: "Please Enter Add Close Exception Descriptiontion ",
            },
            //WorkFlow Template Validation
            add_workflow_activity_detail_id: {
                required: "Please Select Template Type ",
            },
            add_workflow_Problem_Description: {
                required: "Please Enter problem Exception Descriptiontion ",
            },
            option: {
                required: "Please Enter Exception Descriptiontion ",
            },
            //work flow activity validation
            add_workflow_activity_detail_id: {
                required: "Please Enter Activity Detail ",
            },
            //main Screen
            add_main_screen_template_type: {
                required: "Please Select Template Type",
            },
            add_main_screen_template_name: {
                required: "Please Enter Template Name",
            },
            add_main_screen_Problem_des: {
                required: "Please Enter Template Description",
            },
            //Group Ticket
            group_ticket_name: {
                required: "Please Enter Ticket Name",
            },
            group_ticket_desc: {
                required: "Please Enter Ticket Description",
            },
            //Master Ticket SD
            MasterTicketChooseTemplate: {
                required: "Please Select template",
            },
            MasterTicketLinkTo: {
                required: "Please Select Link",
            },
            MasterTicketOU: {
                required: "Please Select OU",
            },
            MasterTicketUser: {
                required: "Please Select User",
            },
            MasterTicketDevice: {
                required: "Please Select Device",
            },
            //KnowledgeBase SD
            create_kb_question: {
                required: "Please Enter Problem Description",
            },
            create_kb_answer: {
                required: "Please Enter Answer",
            },
            //Group Ticket SD
            select_grp_tkt_ou: {
                required: "Please Select OU",
            },
            select_grp_tkt_category: {
                required: "Please Select Category",
            },
            select_grp_tkt_sub_category: {
                required: "Please Select Sub Category",
            },
            select_grp_tkt_item: {
                required: "Please Select Item",
            },
            //Knowlwdgebase User
            user_knowledgebase_question: {
                required: "Please Select Question",
            },
            user_knowledgebase_answer: {
                required: "Please Enter Answer",
            },
            //CustomeKB USer
            create_problem: {
                required: "Please Enter Problem",
            },
            create_description: {
                required: "Please Enter Description",
            },
            create_Cretgory: {
                required: "Please Select Category",
            },
            create_SubCretgory: {
                required: "Please Select SubCategory",
            },
            create_item: {
                required: "Please Select Item",
            },
            //create ticket User
            ctProblem: {
                required: "Please Enter Problem",
            },
            ctDescription: {
                required: "Please Enter Discription",
            },
            ctCategory: {
                required: "Please Select Category",
            },
            ctSubcategory: {
                required: "Please Select Sub Category",
            },
            ctItem: {
                required: "Please Select Item",
            },
            //planned ticket
            PlannedTicketChooseTemplate: {
                required: "Please Select Template ",
            },
            PlannedTicketLinkTo: {
                required: "Please Select LinkTo",
            },
            PlannedTicketOU: {
                required: "Please Select OU",
            },
            PlannedTicketUser: {
                required: "Please Select User",
            },
            PlannedTicketDevice: {
                required: "Please Select Device",
            },

            //create category
            add_new_category_name: {
                required: "Please Select Category",
            },
            add_new_category_description: {
                required: "Please Enter Discription",
            },
            // create subcategory
            select_category_name: {
                required: "Please Select Category",
            },
            add_sub_category_name: {
                required: "Please Enter SubCategory",
            },
            add_sub_category_description: {
                required: "Please Enter Discription",
            },
            //create Item
            select_category_new_name: {
                required: "Please Select Category",
            },
            select_sub_category_name: {
                required: "Please Select SubCategory",
            },
            add_new_item_name: {
                required: "Please Enter Item",
            },
            add_new_item_description: {
                required: "Please Enter Discription",
            },
            //KB Linkage In Service Delivery
            KBOUID: {
                required: "Please Select OU",
            },
            KBCategory: {
                required: "Please Select Category",
            },
            KBSubcategory: {
                required: "Please Select SubCategory",
            },
            KBItem: {
                required: "Please Select Item",
            },

            //notification ticket
            notification_name: {
                required: "Please Enter Notification Name",
            },
            notification_type: {
                required: "Please Select Notification Type",
            },
            dis: {
                required: "Please Enter Description",
            },
            creation_date: {
                required: "Please Select Creation Date",
            },
            end_date: {
                required: "Please Select End Date",
            },
            send_to: {
                required: "Please Select Any",
            },
            admin: {
                required: "Please Select Admin",
            },
            manager: {
                required: "Please Select Manager",
            },
            user: {
                required: "Please Select User",
            },
            priority: {
                required: "Please Select Priority",
            },
            //CreateTicket
            CreateTicket_OU_NAME: {
                required: "Please Select OuName",
            },
            CreateTicket_DeviceName: {
                required: "Please Select DeviceName",
            },
            CreateTicket_UserName: {
                required: "Please Select UserName",
            },
            CreateTicket_TemplateName: {
                required: "Please Select TemplateName",
            }


        },
  
        highlight: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $(document).find('label.error').css('display', 'block');
        },
        errorPlacement: function (error, element) {
            var pos = document.getElementById('radioMessage');
            //var pos1 = document.getElementsByClassName('checkMessage');
            if (element.attr("name") == "priority") {
                error.appendTo(document.getElementById('prioritymessage'));
            }  else if (element.attr("name") == "option") {
                error.appendTo(document.getElementById('errorMessage'));
            } else if (element.attr("name") == "send_to") {
                error.appendTo(document.getElementById('sendtomessage'));
            } else if (element.is(":radio")) {
                error.appendTo(pos);
            }else {
                error.insertAfter(element);
            }
        },
        // onfocusout: function (element) {                       
        //     jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        //     $(document).find('label.error').css('display', 'block');
        //},
    });
}
