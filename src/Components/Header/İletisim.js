import emailjs from "emailjs-com"
import { Col, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap'

const İletisim = () => {

  function sendEmail(e)
  {
    e.preventDefault();
    emailjs.sendForm("service_zw4iwbd","template_twqlrjc",e.target,"uv35BRiGSE2f58p9v"
    )
    .then(res=>{
      console.log(res);
    }).catch(err=>console.log(err))
    ;
  }
  return (
    <div style={{ marginTop: "30px" }}>
      <Form style={{ backgroundColor: " #d1c7cc" }} className='container' onSubmit={sendEmail}>
        <Row>

          <FormGroup>
            <Label>
              Adınız
            </Label>
            <Input
              name="name"
              placeholder="Adınız"
              type="text"
            />
          </FormGroup>

          <Col>
            <FormGroup>
              <Label >
                E posta
              </Label>
              <Input
                name="user_email"
                placeholder="E-mail"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label >
            Mesajınız..
          </Label>
          <Input
            name="message"
            placeholder="Message"
            type="textarea"
          />
        </FormGroup>

        <Button>
          Gönder
        </Button>
      </Form>
    </div>
  )
}
export default İletisim;