//package back.domain.mail.controller;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import back.domain.mail.dto.MailDto;
//import back.domain.mail.service.SendMailService;
//
//
//@RestController
//@RequestMapping("/user")
//@RequiredArgsConstructor
//public class MailController {
//
//
//    @Autowired
//    private final SendMailService mailService;
//
//    @PostMapping("/findpw/sendemail")
//    public void findPassword(@RequestBody MailDto.SendPassword mailDto){
//        MailDto.SendPassword sendMail = mailService.createMailAndChangePassword(mailDto);
//        mailService.findPasswordMailSend(sendMail);
//    }
//
//    @PostMapping("/auth/sendemail")
//    public ResponseEntity checkAuthEmail(@RequestBody MailDto.AuthEmail mailDto){
//        MailDto.AuthEmail senMail = mailService.createMailAndAuthEmail(mailDto);
//        mailService.authEmailMailSend(senMail);
//        MailDto.Key response = new MailDto.Key();
//        response.setCreateKey(senMail.getCreateKey());
//        return new ResponseEntity(response, HttpStatus.OK);
//    }
//}
//
