const getMain = (req, res) => { 
  try {
    res.render('index', { title: 'Heladería Vanguardia' });
  } catch (error) {
    console.error('Error al renderizar la página principal:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const getAbout = (req, res) => {
  try {
    res.render('about', { title: 'Acerca de Heladería Vanguardia' });
  } catch (error) {
    console.error('Error al renderizar la página Acerca de:', error);
    res.status(500).send('Error interno del servidor');
  }
}
const getContact = (req, res) => {
  try {     
    res.render('contact', { title: 'Contacto Heladería Vanguardia' });
  } catch (error) {
    console.error('Error al renderizar la página de contacto:', error); 
    res.status(500).send('Error interno del servidor');
  }
}



module.exports = {
  getMain
, getAbout, getContact
};


