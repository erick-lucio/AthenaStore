package com.spring.models;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

public class Cliente {
	private int id;
	private String nome;
	private String CPF;
	private Date data;
	
	public Cliente() {
		super();

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date now) {
		this.data = now;
	}
	
	
}
