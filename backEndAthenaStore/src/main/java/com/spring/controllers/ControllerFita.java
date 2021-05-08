package com.spring.controllers;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.daos.*;
import com.spring.models.*;

@Controller
public class ControllerFita {


	@RequestMapping (value = "fita", method = RequestMethod.GET )
	public String novaFita(Model model) {	
		
		try {
			model.addAttribute("fitaList", FitaDao.TodasFitas());
			model.addAttribute("fita",new Fita());
		}catch(Exception e) {
			
		}

		return "fita";
	}
	
	@RequestMapping (value="fita", method = RequestMethod.POST)
	public String salvar(@ModelAttribute Fita fita, Model model)  {
		
		try {
			FitaDao.AdicionarFita(fita);
		}catch(Exception e) {
			System.out.println(e);
		}
		
		return "redirect:/fita";
	}
	
	@RequestMapping (value="atualizarfita", method = RequestMethod.POST)
	public String editar(@ModelAttribute Fita fita, Model model) {

		try {
			FitaDao.AtualizarFita(fita);
		}catch(Exception e) {
			
		}
		
		return "redirect:/fita";
	}
	
	@RequestMapping (value="deletarfita", method = RequestMethod.POST)
	public String excluir(@ModelAttribute Fita fita, Model model) {

		try {
			FitaDao.RemoverFita(fita);
		}catch(Exception e) {
			
		}
		
		
		return "redirect:/fita";
	}
}
