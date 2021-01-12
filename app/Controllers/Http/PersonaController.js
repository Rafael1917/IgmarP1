'use strict'
const Database = use('Database')
class PersonaController {
  async index (request, response) {
    const {id} = params
        
    if (id){
        const persona = await persona.find(id)
        return response.json({Pipol:persona})
    }else {
        const persona = await persona.all()
        return response.json({Humano:persona})
    }
  }

  async create ({request, response}){
    const rules = {
        Nombre: 'required',
        ApPa: 'required',
        ApMa: 'required'
    }
    const data = request.all()
    const validation = await validate(data, rules)
    
    if (validation.fails()) {
        return response.json({
            Notificacion:'Algo esta mal, revisa la informacion que intentas registrar',
            Error:validation.messages()})
    }

    const persona = new Persona()
    persona.Nombre    = data.Nombre
    persona.ApPa   = data.ApPa
    persona.ApMa = data.ApMa

    try {
        await persona.save()
        return response.json({Notificacion:'Persona registrada exitosamente', Datos:persona})
    } catch (error) {
        return response.json(Error)
    }      
}

async update({params, request, response}){
  const {id} = params
  const data = request.all()

  const persona = await Persona.find(id)
  persona.Nombre    = data.Nombre
  persona.ApPa   = data.ApPa
  persona.ApMa = data.ApMa

  try {
      await persona.save()
      return response.json({Notificacion:'Se han actualizado los datos correctamente', Datos:persona})
  } catch (error) {
      return response.json(Error)
  }

}

async delete({params, response}){
  const {id} = params
  const persona = await Persona.all()  

  const persona = await Persona.find(id)
  await persona.delete()

  return response.json({Notificacion:'Datos eliminados correctamente', Datos:persona})
}
}
module.exports = PersonaController
