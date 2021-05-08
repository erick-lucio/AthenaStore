package com.spring.controllers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.daos.ClienteDao;
import com.spring.daos.ColaboradorDao;
import com.spring.models.*;

@Controller
public class ControllerColaborador {

	@RequestMapping (value = "colaborador", method = RequestMethod.GET )
	public String novoColaborador(Model model) {	
		
		try {
			model.addAttribute("colaboradorList", ColaboradorDao.TodosColaboradores());
			model.addAttribute("colaborador",new Colaborador());
		}catch(Exception e) {
			
		}

		return "colaborador";
	}
	
	@RequestMapping (value="colaborador", method = RequestMethod.POST)
	public String salvar(@ModelAttribute Colaborador colaborador, Model model)  {
		
		try {
			ColaboradorDao.AdicionarColaborador(colaborador);
		}catch(Exception e) {
			System.out.println(e);
		}
		
		return "redirect:/colaborador";
	}
	
	@RequestMapping (value="atualizarcolaborador", method = RequestMethod.POST)
	public String editar(@ModelAttribute Colaborador colaborador, Model model) {

		try {
			ColaboradorDao.AtualizarColaborador(colaborador);
		}catch(Exception e) {
			
		}
		
		return "redirect:/colaborador";
	}
	
	@RequestMapping (value="deletarcolaborador", method = RequestMethod.POST)
	public String excluir(@ModelAttribute Colaborador colaborador, Model model) {

		try {
			ColaboradorDao.RemoverColaborador(colaborador);
		}catch(Exception e) {
			
		}
		
		
		return "redirect:/colaborador";
	}
	
}
