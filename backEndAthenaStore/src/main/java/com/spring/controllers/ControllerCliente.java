package com.spring.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.daos.ClienteDao;
import com.spring.models.Cliente;


@Controller
public class ControllerCliente {

	@RequestMapping (value = "cliente", method = RequestMethod.GET )
	public String novoCliente(Model model) {	
		
		try {
			model.addAttribute("clienteList", ClienteDao.TodosClientes());
			model.addAttribute("cliente",new Cliente());
		}catch(Exception e) {
			
		}

		return "cliente";
	}
	
	@RequestMapping (value="cliente", method = RequestMethod.POST)
	public String salvar(@ModelAttribute Cliente cliente, Model model)  {
		
		try {
			ClienteDao.AdicionarCliente(cliente);
		}catch(Exception e) {
			System.out.println(e);
		}
		
		return "redirect:/cliente";
	}
	
	@RequestMapping (value="atualizarcliente", method = RequestMethod.POST)
	public String editar(@ModelAttribute Cliente cliente, Model model) {

		try {
			ClienteDao.AtualizarCliente(cliente);
		}catch(Exception e) {
			
		}
		
		return "redirect:/cliente";
	}
	
	@RequestMapping (value="deletarcliente", method = RequestMethod.POST)
	public String excluir(@ModelAttribute Cliente cliente, Model model) {

		try {
			ClienteDao.RemoverCliente(cliente);
		}catch(Exception e) {
			
		}
		
		
		return "redirect:/cliente";
	}
}

